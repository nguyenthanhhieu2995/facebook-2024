import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { sendResetPasswordLink } from '@/apis/auth'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { resetPasswordSchema } from '@/helpers/schema'

export default function resetPassword() {
  const location = useLocation()
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      type: 'sendLink'
    }
  })
  const mutation = useMutation({
    mutationFn: sendResetPasswordLink,
    onSuccess: () => {
      toast.success('Please check your email to reset your password')
    },
    onError: error => {
      toast.error(error.message)
    }
  })
  const onSubmit = (data: z.infer<typeof resetPasswordSchema>) => {
    if (data.type === 'sendLink') {
      mutation.mutate({ email: location.state?.email })
    } else {
      navigate('/')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md border-none bg-white shadow-thin">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader className="mb-2 border-b border-gray-300 p-4">
              <CardTitle className="text-2xl font-bold">Reset Your Password</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 pt-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="sendLink" id="send-link" />
                        </FormControl>
                        <FormLabel htmlFor="send-link" className="font-normal">
                          Send link reset password via email
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="enterCurrentPassword" id="enter-current-password" />
                        </FormControl>
                        <FormLabel htmlFor="enter-current-password" className="font-normal">
                          Enter password to login
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                )}
              />
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">{location.state?.fullName}</div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <div
                className="h-10 px-4 py-2 text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300"
                onClick={() => navigate('/login/identify')}
              >
                Not You?
              </div>
              <Button type="submit">Continue</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}
