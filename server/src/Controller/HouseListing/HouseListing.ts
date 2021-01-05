import { Request, Response } from 'express';
import { ListHouseModel } from '../../Models/ListedHouse/ListedHouse';
import { IncomingForm } from 'formidable';
import { cloudinaryImageUploadMethod } from '../../Utils/MultiFileUploader/MutliFileUpload';
import { MailerSender } from '../../Utils/EmailSender/EmailSender';
import { config } from 'dotenv';
config();

interface HouseListing {
  ListHouse(request: Request, response: Response): void;
}

class HouseListingController implements HouseListing {
  ListHouse(request: Request, response: Response) {
    const form = new IncomingForm();

    try {
      form.parse(request, async (error, fields: any, files: any) => {
        if (error) {
          return response
            .status(500)
            .json({ msg: 'Network Error: Failed to list your house please try again later' });
        }
        //house_images
        const {
          owner_fullName,
          owner_email,
          house_provinceLocation,
          house_streetLocation,
          house_bedroomNumber,
          house_garageNumber,
          house_bathroomNumber,
          house_type
        } = fields;

        const { houseImage1, houseImage2 } = files;

        if (
          !owner_email ||
          !owner_fullName ||
          !houseImage1 ||
          !houseImage2 ||
          !house_bathroomNumber ||
          !house_bedroomNumber ||
          !house_garageNumber ||
          !house_provinceLocation ||
          !house_streetLocation ||
          !house_type
        ) {
          return response.status(400).json({ msg: 'All fields are required to list your house' });
        }

        const image_urlArray: Array<string> = [];

        //.image_url
        const first_houseImageUrl = await cloudinaryImageUploadMethod(houseImage1.path);
        const second_houseImageUrl = await cloudinaryImageUploadMethod(houseImage2.path);

        const houseListingObj: object = {
          owner_fullName,
          owner_email,

          house_provinceLocation,
          house_streetLocation,
          house_garageNumber,
          house_bathroomNumber,
          house_bedroomNumber,
          house_images: [first_houseImageUrl, second_houseImageUrl],
          house_type
        };

        const newHouseListing = new ListHouseModel(houseListingObj);
        const savedHouseListing = await newHouseListing.save();

        if (!savedHouseListing._id) {
          return response
            .status(500)
            .json({ msg: 'Network error: Failed to list your house please try again later' });
        }

        const emailMessage: object = {
          from: 'noreply@Hlongwane-Properties.co.za',
          to: owner_email,
          subject: 'Confirmation: Featured House',
          priority: 'high',
          html: `

              <h1>House Listing Confirmation</h1>

              <h3 style="margin-top:2rem;">Agent will be in touch with you, walking you through the process of getting your house ${
                house_type === 'Rent' ? 'Rented Out!' : 'Sold'
              }</h3>


              <h4 style="margin-top:2rem;">Any Queries?</h4>
              <h4>Email: support@hlongwaneproperties.co.za</h4>
          
          `
        };
        const onSuccessMessage = `House Listing Success, email confirmation sent @${owner_email}`;
        const onErrorMessage = `House Listing Success, Failed to send confirmation email. Our Agent will be in touch on the way forward.\n For any queries please contact: support@hlongwaneproperties.co.za`;
        const mailResponse = MailerSender(
          owner_email,
          emailMessage,
          onSuccessMessage,
          onErrorMessage
        );

        return response.status(mailResponse.status).json({ msg: mailResponse.msg });
      });
    } catch (error) {
      return response.status(500).json({ msg: 'Network Error: Failed to list your house later' });
    }
  }
}

export { HouseListingController };
