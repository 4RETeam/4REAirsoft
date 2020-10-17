import { Injectable } from '@nestjs/common';
import checkoutNodeJssdk from '@paypal/checkout-server-sdk';
import paypal from 'paypal-rest-sdk';
import { Base64 } from 'js-base64';
import { Product } from '../products/schemas/products.schema';
@Injectable()
export class PaypalService {
  getConfig() {
    paypal.configure({
      mode: 'sandbox',
      client_id:
        'AWcd41eNVJAP8ZdrCLdTEQp2i3xrLbtP3PUwKa5xBkS3S4IEr1Nj_M2j0KY3ATZP_VknJLMofviNGp8D',
      client_secret:
        'EKcSqVUwcTXcRlyqx2yVWH6ZfE-AutuRvl7dA8w1xO8i6ItV7Xzlm3evUf31iqScmFOzES0A19KVPngV',
    });
    return paypal;
  }

  getCalculations(){

  }

    pay(product:Product[]) {
    const create_payment_json = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      redirect_urls: {
        return_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: 'thing',
                sku: '001',
                price: '25.02',
                currency: 'EUR',
                quantity: 2,
              },
            ],
          },
          amount: {
            currency: 'EUR',
            total: '50.04',
          },
          description: 'ja hocu srat!',
        },
      ],
    };
    const paypal = this.getConfig();

    paypal.payment.create(create_payment_json, (error, payment) => {
      console.log(payment, error);
      if (error) {
        throw error;
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === 'approval_url') {
            console.log(payment.links[i].href);
            return payment.links[i].href;
          }
        }
      }
    });
  }
}

