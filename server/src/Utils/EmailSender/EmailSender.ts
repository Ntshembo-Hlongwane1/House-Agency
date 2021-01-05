import { createTransport } from 'nodemailer';
import { config } from 'dotenv';
config();

/*
 * N ---> Number
 * M ---> String
 */
interface MailResponse<N, S> extends Object {
  status: N;
  msg: S;
}

export const MailerSender: (
  email: string,
  message: object,
  onSuccessMessage: string,
  onErrorMessage: string
) => MailResponse<number, string> = (
  email,
  message,
  onSuccessMessage,
  onErrorMessage
): MailResponse<number, string> => {
  const transpoter = createTransport({
    service: 'SendinBlue',
    auth: {
      user: process.env.sendinBlue__login,
      pass: process.env.sendinBlue__pass
    }
  });
  transpoter.sendMail(message, (error, info) => {
    if (error) {
      return { status: 500, msg: onErrorMessage };
    }
  });
  return { status: 201, msg: onSuccessMessage };
};
