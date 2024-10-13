import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface ForgotPasswordProps {
  url: string;
  fullName: string;
}

export function ForgotPassword({ url, fullName }: ForgotPasswordProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>Dropbox reset your password</Preview>
        <Body className="py-2 px-0 bg-[#f6f9fc]">
          <Container className="p-12 border border-gray-200 bg-white">
            <Section>
              <Text className="font-base text-[#404040]">Hi {fullName},</Text>
              <Text className="font-base text-[#404040]">
                Someone recently requested a password change for your Facebook
                account. If this was you, you can set a new password here:
              </Text>
              <Button
                href={url}
                className="bg-blue-600 text-white text-center w-60 py-4 rounded-xl"
              >
                Reset password
              </Button>
              <Text className="font-base text-[#404040]">
                If you don&apos;t want to change your password or didn&apos;t
                request this, just ignore and delete this message.
              </Text>
              <Text className="font-base text-[#404040]">
                To keep your account secure, please don&apos;t forward this
                email to anyone. See our Help Center for{" "}
              </Text>
              <Text className="font-base text-[#404040]">
                Facebook team!
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
