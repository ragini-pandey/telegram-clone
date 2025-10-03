import { FeatureCard } from '@/components/FeatureCard';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import { MessageCircle, Shield, Users, Video, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className=''>
      <Header />
      <main className='flex-1 flex flex-col items-center px-4 py-16 sm:px-6 text-center gap-20'>
        <div className='max-w-4xl space-y-8 relative'>
          <div
            className='absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50
          dark:from-blue-950/20 dark:via-indigo-20 dark:to-purple-950/20 rounded-3xl blur-3xl scale-150 opacity-60'
          ></div>
          <div className='max-w-4xl space-y-8 relative'>
            <h1
              className='text-5xl sm:text-7xl font-bold tracking-tight bg-clip-text text-transparent
            bg-gradient-to-r from-blue-600  via-purple-600 to-indigo-600  dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 '
            >
              Connect instantly
              <br />
              <span
                className='bg-clip-text text-transparent
            bg-gradient-to-r from-purple-600 to-pink-600  dark:from-purple-600 dark:to-pink-400'
              >
                Chat smarter.
              </span>
            </h1>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
              The modern messaging platform that combines lighting-fast chat and crystal-clear video
              calls in one seamless experience.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 pt-6'>
            <SignedOut>
              <SignInButton mode='modal'>
                <Button size='lg' className='text-lg px-8 py-6 h-auto'>
                  Start Chatting Free
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
          <div className='pt-8'>
            <p className='text-sm text-muted-foreground mb-4'>
              Trusted by thousands of users worldwide
            </p>
            <div className='flex justify-center items-center gap-8 text-muted-foreground'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-foreground'>50K+</div>
                <div className='text-sm'>Active Users</div>
              </div>
              <div className='w-px h-8 bg-border'></div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-foreground'>1M+</div>
                <div className='text-sm'>Messages sent</div>
              </div>
              <div className='w-px h-8 bg-border'></div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-foreground'>99.9%</div>
                <div className='text-sm'>Uptime</div>
              </div>
            </div>
          </div>
          <div className='w-full max-w-6xl'>
            <div className='w-full flex items-center justify-center mb-16'>
              <div className='flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent'></div>
              <div className='px-6'>
                <div className='w-2 h-2 rounded-full bg-primary/60'></div>
              </div>
              <div className='flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent'></div>
            </div>
          </div>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
              Everything you need to stay connected
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Powerful features designed for seamless communication, whether you&apos;re chatting
              with friends or collaborating with teams.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
            <FeatureCard
              icon={MessageCircle}
              title='Instant Messaging'
              desc='Lightning-fast messages with real-time delivery. Chat with friends and colleagues seamlessly.'
            />
            <FeatureCard
              icon={Video}
              title='HD Video Calls'
              desc='Crystal-clear video calls with one click. Perfect quality for personal chats and team meetings.'
            />{' '}
            <FeatureCard
              icon={Shield}
              title='Privacy First'
              desc='End-to-end encryption keeps your conversations private. Your data belongs to you, always.'
            />{' '}
            <FeatureCard
              icon={Users}
              title='Group Chats'
              desc='Create groups with friends, family, or colleagues. Manage converstaions with advanced controls.'
            />{' '}
            <FeatureCard
              icon={Zap}
              title='Lightning Fast'
              desc='Optimized for speed and performance. Works seamlessly across all your devices with instant sync.'
            />
          </div>
        </div>
        {/* Enhanced CTA section */}
        <div className='w-full max-w-4xl'>
          <div className='rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10 p-12 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
              Ready to transform your conversations?
            </h2>
            <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
              Join thousands of users who&apos;ve already discovered a better way to communicate.
              Start your journey with Beam today — it&apos;s completely free.
            </p>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
              <SignedOut>
                <SignUpButton mode='modal'>
                  <Button size='lg' className='text-lg px-8 py-6 h-auto'>
                    Get Started Free
                  </Button>
                </SignUpButton>
              </SignedOut>
            </div>
            <div className='flex justify-center flex-col sm:flex-row items-center gap-6 mt-8 text-sm text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-green-500'></div>
                No credit card required
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-green-500'></div>
                Free forever plan
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-green-500'></div>
                Setup in 30 seconds
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='border-t bg-muted/30'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 py-12'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-6'>
            <div>
              <span className='text-xl font-bold tracking-tight'>Beam</span>
              <p className='text-sm text-muted-foreground mt-1'>The future of communication</p>
            </div>
            <div className='flex items-center gap-8'>
              <a
                href='#'
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                Terms of Service
              </a>
              <a
                href='#'
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                Support
              </a>
            </div>
          </div>

          <div className='border-t mt-8 pt-6 text-center'>
            <p className='text-xs text-muted-foreground'>
              2025 Beam. This is a Demo. We have no affiliation with any of the brands mentioned in
              the video including Beam, any usage is purely educational. In the event of any
              infringement, please contact us and we will remove/alter the content immediately.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
