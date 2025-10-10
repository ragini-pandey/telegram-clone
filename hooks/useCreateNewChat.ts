import streamClient from "@/lib/stream";

export const useCreateNewChat = () => {
    const createNewChat = async ({
        members,
        createdBy,
        groupName
    }: {
        members: string[];
        createdBy: string;
        groupName?: string;
    }) => {
        const isGroupChat = members.length > 2;
        if (!isGroupChat) {
            const existingChannel = await streamClient.queryChannels(
                { type: "messaging", members: { $eq: members } },
                { created_at: -1 }, { limit: 1 }
            )

            if (existingChannel.length > 0) {
                const channel = existingChannel[0];
                const channelMembers = Object.keys(channel.state.members);

                if (channelMembers.length === 2 &&
                    members.length === 2 &&
                    members.every((member) => channelMembers.includes(member))
                ) {
                    return channel;
                }
            }

        }

        const channelId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
        try {
            const channelData: {
                members: string[];
                createdBy: string;
                name?: string;
            } = {
                members,
                createdBy
            }

            if (isGroupChat) {
                channelData.name = groupName || `Group Chat (${members.length}) members`;
            }

            const channel = streamClient.channel(
                isGroupChat ? "team" : "messaging",
                channelId,
                channelData
            );
            await channel.watch({
                presence: true,
            });

            return channel;

        } catch (error) {
            throw error;
        }
    }
    return createNewChat;
}
