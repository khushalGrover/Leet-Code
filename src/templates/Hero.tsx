import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-red-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <span className="text-primary-500">Premium</span>
          </Link>
        </li>
        <li>
          <Link href="/">Explore</Link>
        </li>
        <li>
          <Link href="/">Product</Link>
        </li>
        <li>
          <Link href="/">Developer</Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'A New Way to '}
            <span className="text-primary-500">Learn</span>
          </>
        }
        description="LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Create Account</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
