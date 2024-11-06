import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import PageUserItem from '@/components/PageUserItem'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import * as FeatureIcon from '@/components/feature-icons'
import Search from '@/components/Search'
import AccountItem from './AccountItem'
import { removeToken } from '@/helpers/token'
import Image from '@/components/Image'

enum Position {
  root,
  help,
  language,
  setting,
  facebookLanguage,
  displayAndAccessibility,
  keyboard
}

interface AccountMenuContentProps {
  username?: string
  avatar?: string
}

function AccountMenuContent({ username, avatar }: AccountMenuContentProps) {
  const [position, setPosition] = useState(Position.root)
  const positions = {
    [Position.root]: {
      id: Position.root,
      component: (
        <div className="mt-1 flex cursor-pointer flex-col">
          <div className="mb-4 rounded-lg border border-gray-200 shadow-xl">
            <div className="m-1 flex items-center gap-2 rounded-md p-2 hover:bg-gray-200">
            <Image src={avatar} alt="User Avatar" className="size-10 object-cover rounded-full" />
              <p>{username}</p>
            </div>
            <div className="mx-2 h-[1.5px] bg-gray-300"></div>
            <PageUserItem avatar={avatar} />
            <PageUserItem avatar={avatar} />
            <div className="mx-2 h-[1.5px] bg-gray-200"></div>
            <div className="m-3">
              <Button className="w-full" variant="secondary">
                <FeatureIcon.V1 name="SeeProfile" />
                See all personal pages
              </Button>
            </div>
          </div>
          <AccountItem
            logoIcon={<FeatureIcon.V2 name="MetaBusiness" />}
            title="Meta Business Suite"
            onClick={() => console.log('Meta Business Suite')}
            directIcon={<FeatureIcon.V4 name="ArrowTopRight" />}
          />
          <AccountItem
            logoIcon={<FeatureIcon.V3 name="SettingAndPrivacy" />}
            title="Settings & Privacy"
            onClick={() => setPosition(Position.setting)}
            directIcon={<FeatureIcon.V5 name="ArrowRight" />}
          />
          <AccountItem
            logoIcon={<FeatureIcon.V1 name="HelpAndSupport" />}
            title="Help & Support"
            onClick={() => setPosition(Position.help)}
            directIcon={<FeatureIcon.V5 name="ArrowRight" />}
          />
          <AccountItem
            logoIcon={<FeatureIcon.V2 name="DisplayAccessibility" />}
            title="Display & Accessibility"
            onClick={() => setPosition(Position.displayAndAccessibility)}
            directIcon={<FeatureIcon.V5 name="ArrowRight" />}
          />
          <AccountItem
            logoIcon={<FeatureIcon.V1 name="Feedback" />}
            title="Give Feedback"
            onClick={() => console.log('Give Feedback')}
          />
          <AccountItem
            logoIcon={<FeatureIcon.V2 name="LogOut" />}
            title="Log Out"
            onClick={() => {
              removeToken()
              document.location.reload()
            }}
          />
        </div>
      )
    },
    [Position.setting]: {
      id: Position.setting,
      component: (
        <>
          <div className="mb-2 mt-1 flex items-center gap-2 px-2 text-2xl font-bold">
            <div
              className="relative flex cursor-pointer items-center rounded-full p-2.5 hover:bg-gray-200"
              onClick={() => setPosition(Position.root)}
            >
              <FeatureIcon.V3 name="ArrowLeft" />
            </div>
            <h1 className="pl-4">Settings & Privacy</h1>
          </div>
          <div className="flex flex-col">
            <AccountItem
              title="Settings"
              logoIcon={<FeatureIcon.V3 name="SettingAndPrivacy" />}
              onClick={() => console.log('Settings')}
            />
            <AccountItem
              title="Language"
              logoIcon={<FeatureIcon.V5 name="Global" size="size-5" />}
              directIcon={<FeatureIcon.V5 name="ArrowRight" />}
              onClick={() => setPosition(Position.language)}
            />
            <AccountItem
              title="Privacy Checkup"
              logoIcon={<FeatureIcon.V1 name="PrivacyCheckup" />}
              onClick={() => console.log('Privacy Checkup')}
            />
            <AccountItem
              title="Privacy Center"
              logoIcon={<FeatureIcon.V6 name="PrivacyCenter" />}
              onClick={() => console.log('Privacy Center')}
            />
            <AccountItem
              title="Activity Log"
              logoIcon={<FeatureIcon.V7 name="ActivityLog" />}
              onClick={() => console.log('Activity Log')}
            />
            <AccountItem title="Feed" logoIcon={<FeatureIcon.V1 name="Feed" />} onClick={() => console.log('Feed')} />
          </div>
        </>
      )
    },
    [Position.language]: {
      id: Position.language,
      component: (
        <>
          <div className="mb-2 mt-1 flex items-center gap-2 px-2 text-2xl font-bold">
            <div
              className="relative flex cursor-pointer items-center rounded-full p-2.5 hover:bg-gray-200"
              onClick={() => setPosition(Position.setting)}
            >
              <FeatureIcon.V3 name="ArrowLeft" />
            </div>
            <h1 className="pl-4">Language</h1>
          </div>
          <h3 className="pl-4 text-lg font-semibold">Language and region</h3>
          <div className="flex flex-col">
            <AccountItem
              title="Facebook Language"
              style="py-0"
              logoIcon={<FeatureIcon.V1 name="GlobalPencil" size="size-5" />}
              content="English (United States)"
              directIcon={<FeatureIcon.V5 name="ArrowRight" />}
              onClick={() => setPosition(Position.facebookLanguage)}
            />
            <AccountItem
              title="View All Setting"
              logoIcon={<FeatureIcon.V3 name="SettingAndPrivacy" />}
              onClick={() => console.log('View All Setting')}
            />
          </div>
        </>
      )
    },
    [Position.facebookLanguage]: {
      id: Position.language,
      component: (
        <>
          <div className="mb-2 mt-1 flex items-center gap-2 px-2 text-2xl font-bold">
            <div
              className="relative flex cursor-pointer items-center rounded-full p-2.5 hover:bg-gray-200"
              onClick={() => setPosition(Position.language)}
            >
              <FeatureIcon.V3 name="ArrowLeft" />
            </div>
            <h1 className="pl-4"> Facebook Language</h1>
          </div>
          <Search placeholderValue="Search languages" />
          <div className="flex flex-col pt-2 text-sm">
            <AccountItem
              style="py-0"
              title="Facebook Language"
              content="English (United States)"
              onClick={() => console.log('English (United States)')}
            />
            <AccountItem
              style="py-0"
              title="Tiếng Việt"
              content="Vietnamese"
              onClick={() => console.log('Vietnamese')}
            />
          </div>
        </>
      )
    },
    [Position.help]: {
      id: Position.help,
      component: (
        <>
          <div className="mb-2 mt-1 flex items-center gap-2 px-2 text-2xl font-bold">
            <div
              className="relative flex cursor-pointer items-center rounded-full p-2.5 hover:bg-gray-200"
              onClick={() => setPosition(Position.root)}
            >
              <FeatureIcon.V3 name="ArrowLeft" />
            </div>
            <h1 className="pl-4">Help & Support</h1>
          </div>
          <div className="flex flex-col">
            <AccountItem
              title="Help Center"
              logoIcon={<FeatureIcon.V1 name="HelpAndSupport" />}
              onClick={() => console.log('Help Center')}
            />
            <AccountItem
              title="Support Inbox"
              logoIcon={<FeatureIcon.V7 name="MessageSupport" size="size-5" />}
              onClick={() => setPosition(Position.language)}
            />
            <AccountItem
              title="Report a problem"
              logoIcon={<FeatureIcon.V7 name="Reports" />}
              onClick={() => console.log('Report a problem')}
            />
          </div>
        </>
      )
    },
    [Position.displayAndAccessibility]: {
      id: Position.displayAndAccessibility,
      component: (
        <>
          <div className="mb-2 mt-1 flex items-center gap-2 px-2 text-2xl font-bold">
            <div
              className="relative flex cursor-pointer items-center rounded-full p-2.5 hover:bg-gray-200"
              onClick={() => setPosition(Position.root)}
            >
              <FeatureIcon.V3 name="ArrowLeft" />
            </div>
            <h1 className="pl-4">Display & Accessibility</h1>
          </div>
          <div className="flex flex-col">
            <AccountItem
              title="Dark Mode"
              content="Adjust Facebook's look and feel to reduce glare and give your eyes a break."
              logoIcon={<FeatureIcon.V6 name="DarkMode" />}
              onClick={() => console.log('Dark Mode')}
              radios={[
                { title: 'Turn on' },
                { title: 'Turn off' },
                {
                  title: 'Auto',
                  content: 'We will automatically adjust the screen according to the system settings on your device.'
                }
              ]}
            />
            <AccountItem
              title="Collapse Mode"
              content="Reduce the font size for more content that fits on the screen."
              logoIcon={<FeatureIcon.V1 name="CollapseMode" />}
              onClick={() => console.log('Collapse Mode')}
              radios={[{ title: 'Turn on' }, { title: 'Turn off' }]}
            />
            <AccountItem
              title="Show previews of links"
              content="Without opening a page to a person, event, or group, show info and actions in a preview window."
              logoIcon={<FeatureIcon.V5 name="MousePointer" size="size-5" />}
              onClick={() => console.log('Show previews of links')}
              radios={[
                { title: 'Show a preview when hovering over a link' },
                {
                  title: 'Show a preview after focusing a link',
                  content:
                    'Best suited when using a screen reader or magnifying glass. The link changes to a button to open the preview window'
                }
              ]}
            />
            <AccountItem
              title="Keyboard"
              logoIcon={<FeatureIcon.V5 name="MousePointer" size="size-5" />}
              onClick={() => setPosition(Position.keyboard)}
              directIcon={<FeatureIcon.V5 name="ArrowRight" />}
            />
          </div>
        </>
      )
    },
    [Position.keyboard]: {
      id: Position.keyboard,
      component: (
        <>
          <div className="mb-2 mt-1 flex items-center gap-2 px-2 text-2xl font-bold">
            <div
              className="relative flex cursor-pointer items-center rounded-full p-2.5 hover:bg-gray-200"
              onClick={() => setPosition(Position.displayAndAccessibility)}
            >
              <FeatureIcon.V3 name="ArrowLeft" />
            </div>
            <h1 className="pl-4">Keyboard</h1>
          </div>
          <div className="flex flex-col">
            <AccountItem
              title="See all Keyboard shortcuts"
              logoIcon={<FeatureIcon.V1 name="KeyBoard" size="size-5" />}
              onClick={() => console.log('See all Keyboard shortcuts')}
            />
            <AccountItem
              title="Use single-character keyboard shortcuts"
              logoIcon={<FeatureIcon.V7 name="Star" size="size-5" />}
              content="Use single-character shortcuts to perform common actions."
              onClick={() => console.log('Use shortcuts with one character')}
              radios={[{ title: 'On' }, { title: 'Off' }]}
            />
          </div>
        </>
      )
    }
  }

  return positions[position].component
}

export default AccountMenuContent
