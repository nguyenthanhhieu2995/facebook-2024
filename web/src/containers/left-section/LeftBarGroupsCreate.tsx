import { cn } from '@/utils/cn'
import { X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import logoFacebook from '@/assets/images/logo-facebook.png'
import avatar from '@/assets/images/avatar.jpeg'
import global from '@/assets/images/global.png'
import lock from '@/assets/images/lock.png'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Image from '@/components/Image'

const formSchema = z.object({
  groupName: z.string().min(2).max(50),
  choosePrivacy: z.string().min(2).max(50),
  inviteFriends: z.string().min(2).max(50)
})

interface LeftBarGroupsCreateProps {
  className?: string
}

export default function LeftBarGroupsCreate({ className }: LeftBarGroupsCreateProps) {
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      groupName: '',
      choosePrivacy: '',
      inviteFriends: ''
    }
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
  
    console.log(values)
  }

  return (
    <div className={cn('h-[100dvh] overflow-y-hidden bg-white shadow-thin', className)}>
      <div className="flex h-14 items-center gap-2 pl-4 shadow-thin">
        <Button
          variant="destructive"
          size={'icon'}
          className="bg-gray-400 p-2 text-white hover:bg-gray-500"
          onClick={() => navigate(-1)}
        >
          <X />
        </Button>
        <Link to="/">
          <Avatar>
            <AvatarImage src={logoFacebook} />
            <AvatarFallback>FB</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div className="pt-4">
        <div className="item-center flex gap-1 px-4 text-xs text-gray-900">
          <p className="cursor-pointer hover:underline" onClick={() => navigate('/groups')}>
            Groups
          </p>
          <p>{'>'}</p>
          <p>Create group</p>
        </div>
        <h1 className="mb-4 px-4 text-2xl font-bold">Create Group</h1>
        <div className="flex items-center gap-2 px-4">
          <Avatar className="size-9">
            <AvatarImage src={avatar} />
            <AvatarFallback>
              <span className="sr-only">Loading...</span>
            </AvatarFallback>
          </Avatar>
          <div className="leading-4">
            <h4 className="font-semibold">Son Tung</h4>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-56">
            <div className="grow space-y-4 px-4">
              <FormField
                control={form.control}
                name="groupName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Group name" {...field} className="w-full rounded-lg p-4" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="choosePrivacy"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value} required>
                        <SelectTrigger className="rounded-lg p-4">
                          <SelectValue placeholder={"Choose privacy"} />
                        </SelectTrigger>
                        <SelectContent className="h-48 w-82">
                          <SelectItem value="public">
                            <div className="flex flex-row items-center gap-1 rounded-xl p-2 text-sm hover:bg-gray-200">
                              <div className="rounded-full bg-gray-300">
                                <Image src={global} alt="global" />
                              </div>
                              <div className="flex grow flex-col overflow-hidden pl-2">
                                <h4 className="text-sm font-semibold">Public</h4>
                                <p className="line-clamp-2 text-xs">
                                  {"Anyone can see who's in this group and what they post"}
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="private">
                            <div className="flex flex-row items-center gap-1 rounded-xl p-2 text-sm hover:bg-gray-200">
                              <div className="rounded-full bg-gray-300">
                                <Image src={lock} alt="lock" />
                              </div>
                              <div className="flex grow flex-col overflow-hidden pl-2">
                                <h4 className="text-sm font-semibold">Private</h4>
                                <p className="line-clamp-2 text-xs">
                                  {"Only members can see who's in the group and what they post"}
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                          <div className="border-t border-gray-300 pb-1" />
                          <span className="p-4 text-xs">
                            Learn more about{' '}
                            <a className="cursor-pointer text-primary hover:underline" href="test">
                              group privacy
                            </a>
                          </span>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="inviteFriends"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Invite friends (optional)" {...field} className="w-full rounded-lg p-4" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="p-4 shadow-thin">
              <Button type="submit" className="w-full">
                Create
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
