import * as nodemailer from 'nodemailer'
import { MAIL_FROM, MAIL_TRANSPORT } from '@/lib/constants'

interface SendMailOptions {
  to: string
  subject: string
  html: string
}

class MailService {
  private transporter: nodemailer.Transporter

  constructor() {
    if (!MAIL_TRANSPORT) {
      throw new Error('MAIL_TRANSPORT is not defined')
    }
    this.transporter = nodemailer.createTransport(MAIL_TRANSPORT)
  }
  sendMail({to,html,subject}: SendMailOptions) {
    return this.transporter.sendMail({
      from:`"Facebook "${MAIL_FROM}`,
      to,
      subject,
      html
    })
  }
}
export const mailService = new MailService()


