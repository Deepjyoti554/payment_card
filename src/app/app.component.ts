import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'payment';
  // heading = "free"
  // isdisable = false
  // src = "https://picsum.photos/100/100"

  // showAlert() {
  //   alert("iam clicked")
  // }

  // image = [
  //   'https://fastly.picsum.photos/id/687/200/200.jpg?hmac=U-mrTuk3Y5M3brBJ76mYvaj-bZ3ggY1OD8YOIPw89uI',
  //   'https://fastly.picsum.photos/id/381/200/200.jpg?hmac=IXUwJuDt0wy3ChotTk60XiBv1aDqt3EbITLD8z4671w',
  //   'https://fastly.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE'
  // ];

  // textValue = "hello"
  // src = this.image[0];

  // changeImg()
  // {
  //   this.src = this.image[Math.floor(Math.random() * 3)]
  // }

  content = [
    {
      plan: "Free",
      price: "$0/month",
      desc: [
        {
          name: "Single User",
          isdisable: true
        },
        {
          name: "5GB Storage",
          isdisable: true
        },
        {
          name: "Unlimited Public Projects",
          isdisable: true
        },
        {
          name: "Community Access",
          isdisable: true
        },
        {
          name: "Unlimited Private Projects",
          isdisable: true
        },
        {
          name: "Dedicated Phone Support",
          isdisable: true
        },
        {
          name: "Free Subdomain",
          isdisable: true
        },
        {
          name: "Monthly Status Reports",
          isdisable: false
        }
      ]
    },
    {
      plan: "Plus",
      price: "$9/month",
      desc: [
        {
          name: "5 Users",
          isdisable: true
        },
        {
          name: "50GB Storage",
          isdisable: true
        },
        {
          name: "Unlimited Public Projects",
          isdisable: true
        },
        {
          name: "Community Access",
          isdisable: true
        },
        {
          name: "Unlimited Private Projects",
          isdisable: true
        },
        {
          name: "Dedicated Phone Support",
          isdisable: true
        },
        {
          name: "Free Subdomain",
          isdisable: false
        },
        {
          name: "Monthly Status Reports",
          isdisable: false
        }
      ]
    },
    {
      plan: "Pro",
      price: "$12/month",
      desc: [
        {
          name: "Unlimited Users",
          isdisable: true
        },
        {
          name: "150GB Storage",
          isdisable: true
        },
        {
          name: "Unlimited Public Projects",
          isdisable: true
        },
        {
          name: "Community Access",
          isdisable: true
        },
        {
          name: "Unlimited Private Projects",
          isdisable: true
        },
        {
          name: "Dedicated Phone Support",
          isdisable: true
        },
        {
          name: "Free Subdomain",
          isdisable: true
        },
        {
          name: "Monthly Status Reports",
          isdisable: true
        }
      ]
    },
  ]

}
