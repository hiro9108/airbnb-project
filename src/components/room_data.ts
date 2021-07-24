import {
  faMapMarkerAlt,
  faKey,
  faBookmark,
  faUtensils,
  faWifi,
  faParking,
  faTv,
  faMedal,
  faHeart,
  faUmbrellaBeach,
  faHotTub,
  faPaw,
  faWater,
} from "@fortawesome/free-solid-svg-icons";

const ROOMS = [
  {
    id: "r1",
    name: "Clean Room with Private Bathroom",
    subTitle: "Entire guest suits in Vancouver",
    star: 4.82,
    reviewCount: 17,
    images: [
      "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxpdmluZ3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVkcm9vbXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1574739782594-db4ead022697?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8a2l0Y2hlbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1584069793933-57852d7060ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmF0aHJvb218ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    ],
    address: {
      country: "Canada",
      province: "British Columbia",
      city: "Vancouver",
    },
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13238.304303826317!2d-123.13415615419888!3d49.28492026327771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f45186a3f%3A0x26cdaebfb6f46250!2sCF%20Pacific%20Centre!5e0!3m2!1sen!2sca!4v1626931493346!5m2!1sen!2sca",
    room: {
      maximumGuest: 2,
      bedroom: "1 bedroom",
      bed: "1 bed",
      bathroom: "1 shared bath",
    },
    highLights: [
      {
        icon: faMapMarkerAlt,
        title: "Great Location",
        description: "100% of recent guests gave the location a 5-star rating.",
      },
      {
        icon: faKey,
        title: "Great check-in experience",
        description:
          "100% of recent guests gave the check-in process a 5-star rating.",
      },
      {
        icon: faBookmark,
        title: "Wifi",
        description: "Guests often search for this popular amenity",
      },
    ],
    additionalInfo: ["Committed to Enhanced Clean"],
    description:
      "Located in the heart of downtown on a beautiful residential block on Thurlow street close to Nelson park, Starbucks, and popular attractions. This spacious house is steps away from all the shopping, international cuisines, night life activities downtown and all the amenities that guests need to make Downtown so livable without transportation.. Within a 15 minute walk is the SkyTrain station. Perfect for international travellers or students who want to enjoy Downtown Vancouver....",
    bedRoomInfo: [
      {
        bed: "Bedroom 1",
        type: "1 queen bed",
      },
    ],
    amenities: [
      {
        amenity: "Kitchen",
        icon: faUtensils,
      },
      {
        amenity: "Wifi",
        icon: faWifi,
      },
      {
        amenity: "Free street parking",
        icon: faParking,
      },

      {
        amenity: "TV",
        icon: faTv,
      },
    ],
    rules: [
      "Check-in: After 3:00 p.m.",
      "Checkout: 10:00 a.m.",
      "Not suitable for children and infants",
      "No smoking",
      "No pets",
      "No parties or events",
    ],
    healthInfo: [
      "Committed to Airbnb's enhanced cleaning process.",
      "Airbnb's social-distancing and other COVID-19-related guidelines apply",
      "Carbon monoxide alarm",
      "Smoke alarm",
    ],
    cancelPolicy:
      "Add your trip dates to get the cancellation details for this stay.",
    reviews: [
      {
        date: "July 2021",
        comment:
          "It was an amazing experience, the house is right in the centre of all the downtown action. The place is clean. Tatiane is super friendly and easy to communicate with.",
        userId: "u1",
      },
      {
        date: "April 2021",
        comment:
          "Great location, near lots of restaurants. The host is very responsive and comes by often to clean. Great stay!",
        userId: "u2",
      },
      {
        date: "January 2021",
        comment: "Awseome great everything was as to be expected",
        userId: "u3",
      },
      {
        date: "October 2020",
        comment: "It was very nice stay",
        userId: "u4",
      },
      {
        date: "May 2021",
        comment:
          "A really cute stay. It was very clean and really close to many places in downtown.",
        userId: "u5",
      },

      {
        date: "July 2021",
        comment:
          "Fantastic place to stay in VC, very close to a lot of amenities.",
        userId: "u6",
      },
    ],
    ownerId: "o1",
  },
  {
    id: "r2",
    name: "The Nook in Kitsilano",
    subTitle: "Private room in Kitsilano",
    star: 4.91,
    reviewCount: 66,
    images: [
      "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1585821569331-f071db2abd8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1601146590329-66f6867dd22e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFja3lhcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    address: {
      country: "Canada",
      province: "British Columbia",
      city: "Vancouver",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15499.097443155282!2d-123.13654367449413!3d49.280660273649126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486718043c02549%3A0x2758543ebd7d5b33!2sZara%20Robson%20St.!5e0!3m2!1sen!2sca!4v1626936951392!5m2!1sen!2sca",
    room: {
      maximumGuest: 2,
      bedroom: "1 bedroom",
      bed: "1 bed",
      bathroom: "1 private bath",
    },
    highLights: [
      {
        icon: faMapMarkerAlt,
        title: "Great Location",
        description: "100% of recent guests gave the location a 5-star rating.",
      },
      {
        icon: faKey,
        title: "Great check-in experience",
        description:
          "100% of recent guests gave the check-in process a 5-star rating.",
      },
      {
        icon: faBookmark,
        title: "Wifi",
        description: "Guests often search for this popular amenity",
      },
    ],
    additionalInfo: ["Self check-in", "Committed to Enhanced Clean"],
    description:
      "Stay with us in our charming Nook studio located in Kitsilano, two blocks from broadway restaurants,cafes, public transport & 10 blocks to the beach. It comfortably fits 2 with a kingsize bed & ensuite bathroom & a Kitchenette!",
    bedRoomInfo: [
      {
        bed: "Bedroom 1",
        type: "1 king bed",
      },
    ],
    amenities: [
      {
        amenity: "Kitchen",
        icon: faUtensils,
      },
      {
        amenity: "Wifi",
        icon: faWifi,
      },
      {
        amenity: "Free street parking",
        icon: faParking,
      },

      {
        amenity: "TV",
        icon: faTv,
      },
    ],
    rules: [
      "Check-in: After 4:00 p.m.",
      "Checkout: 11:00 a.m.",
      "Self check-in with lockbox",
      "Not suitable for children and infants",
      "No smoking",
      "No pets",
      "No parties or events",
    ],
    healthInfo: [
      "Committed to Airbnb's enhanced cleaning process.",
      "Airbnb's social-distancing and other COVID-19-related guidelines apply",
      "Carbon monoxide alarm",
      "Smoke alarm",
      "Security Deposit - if you damage the home, you may be charged up to $400",
    ],
    cancelPolicy:
      "Add your trip dates to get the cancellation details for this stay.",
    reviews: [
      {
        date: "July 2021",
        comment:
          "Rasha is the perfect host and the nook is an idyllic oasis in the city. Would stay again in a heartbeat.",
        userId: "u4",
      },
      {
        date: "April 2021",
        comment: "Great location!",
        userId: "u6",
      },
      {
        date: "January 2021",
        comment: "Awseome great everything was as to be expected",
        userId: "u5",
      },
      {
        date: "October 2020",
        comment: "It was very nice stay",
        userId: "u1",
      },
      {
        date: "May 2021",
        comment:
          "A really cute stay. It was very clean and really close to many places in downtown.",
        userId: "u2",
      },

      {
        date: "July 2021",
        comment:
          "Fantastic place to stay in VC, very close to a lot of amenities.",
        userId: "u8",
      },
    ],
    ownerId: "o2",
  },
  {
    id: "r3",
    name: "Studio Apartment near YVR and Skytrain",
    subTitle: "Private room in Richmond",
    star: 4.57,
    reviewCount: 49,
    images: [
      "https://images.unsplash.com/photo-1595599512948-b9831e5fc11c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWRpbyUyMGFwYXJ0bWVudHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1612746240313-734c396e8459?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGtpdGNoZW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1560185127-6d2eb05d7088?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJhdGhyb29tfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1542766788-a2f588f447ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGxvYmJ5fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    ],
    address: {
      country: "Canada",
      province: "British Columbia",
      city: "Richmond",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21454.025400287275!2d-123.1184581061233!3d49.17082818324767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486753f62e36785%3A0xecbc2b2d16a3827c!2sColonel%20Sherman%20Armoury!5e0!3m2!1sen!2sca!4v1626978356894!5m2!1sen!2sca",
    room: {
      maximumGuest: 2,
      bedroom: "Studio",
      bed: "1 bed",
      bathroom: "1 bath",
    },
    highLights: [
      {
        icon: faKey,
        title: "Great check-in experience",
        description:
          "100% of recent guests gave the check-in process a 5-star rating.",
      },
      {
        icon: faBookmark,
        title: "Wifi",
        description: "Guests often search for this popular amenity",
      },
    ],
    additionalInfo: ["Self check-in", "Committed to Enhanced Clean"],
    description:
      "Located on the Vancouver Airport hotel strip (Bridgeport Road), this private, ground-floor apartment in a character home is ideal for layovers as well as long term stays. Access the skytrain to downtown Vancouver or walk to one of several restaurants in the neighborhood.",
    bedRoomInfo: [
      {
        bed: "Common spaces",
        type: "1 king bed",
      },
    ],
    amenities: [
      {
        amenity: "Kitchen",
        icon: faUtensils,
      },
      {
        amenity: "Wifi",
        icon: faWifi,
      },
      {
        amenity: "Free street parking",
        icon: faParking,
      },

      {
        amenity: "TV",
        icon: faTv,
      },
    ],
    rules: [
      "Check-in: After 3:00 p.m.",
      "Checkout: 11:00 a.m.",
      "Self check-in with lockbox",
      "Not suitable for children and infants",
      "No smoking",
      "No pets",
      "No parties or events",
    ],
    healthInfo: [
      "Committed to Airbnb's enhanced cleaning process.",
      "Airbnb's social-distancing and other COVID-19-related guidelines apply",
      "Carbon monoxide alarm",
      "Smoke alarm",
    ],
    cancelPolicy:
      "Add your trip dates to get the cancellation details for this stay.",
    reviews: [
      {
        date: "July 2021",
        comment:
          "Owner is the perfect host and the nook is an idyllic oasis in the city. Would stay again in a heartbeat.",
        userId: "u4",
      },
      {
        date: "April 2021",
        comment: "Great location!",
        userId: "u9",
      },
      {
        date: "January 2021",
        comment: "Awseome great everything was as to be expected",
        userId: "u14",
      },
      {
        date: "July 2021",
        comment:
          "Cozy little private room with everything you need. Easy access to anywhere you need to go. Karl was a great host!",
        userId: "u13",
      },
      {
        date: "May 2021",
        comment:
          "The suite was conveniently located close to the airport, and close to Fujiya. We loved having a separate entrance. The only problem is that it is located on a busy road, but otherwise it was a great place to stay the night.",
        userId: "u12",
      },

      {
        date: "July 2021",
        comment:
          "Fantastic place to stay in VC, very close to a lot of amenities.",
        userId: "u8",
      },
    ],
    ownerId: "o3",
  },
  {
    id: "r4",
    name: "Entire apartment, convenient central location",
    subTitle: "Entire condominium in Richmond",
    star: 5.0,
    reviewCount: 3,
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aHJvb218ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1587048595115-553751fdc150?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxpdmluZ3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1571905837410-87605d34ad73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZG98ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    ],
    address: {
      country: "Canada",
      province: "British Columbia",
      city: "Richmond",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21454.025400287275!2d-123.1184581061233!3d49.17082818324767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486753f62e36785%3A0xecbc2b2d16a3827c!2sColonel%20Sherman%20Armoury!5e0!3m2!1sen!2sca!4v1626978356894!5m2!1sen!2sca",
    room: {
      maximumGuest: 2,
      bedroom: "1 bedroom",
      bed: "1 bed",
      bathroom: "1 bath",
    },
    highLights: [
      {
        icon: faMedal,
        title: "Superhost",
        description:
          "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
      },
      {
        icon: faKey,
        title: "Great check-in experience",
        description:
          "100% of recent guests gave the check-in process a 5-star rating.",
      },
      {
        icon: faBookmark,
        title: "Wifi",
        description: "Guests often search for this popular amenity",
      },
    ],
    additionalInfo: ["Entire home to yourself", "Committed to Enhanced Clean"],
    description:
      "A spacious, clean, and private apartment located in the heart of Richmond. You are 10 mins walk from CF Richmond shopping center and Richmond Brighouse skytrain station (Canada line) that can take you to YVR airport and downtown Vancouver. Minutes away from 7-Eleven convenience store, bus stops, more...",
    bedRoomInfo: [
      {
        bed: "Bedroom 1",
        type: "1 queen bed",
      },
    ],
    amenities: [
      {
        amenity: "Kitchen",
        icon: faUtensils,
      },
      {
        amenity: "Wifi",
        icon: faWifi,
      },
      {
        amenity: "Free street parking",
        icon: faParking,
      },

      {
        amenity: "TV",
        icon: faTv,
      },
    ],
    rules: [
      "Check-in: 3:00 p.m. - 10:00 p.m.",
      "Checkout: 10:00 a.m.",
      "Self check-in with lockbox",
      "Not suitable for children and infants",
      "No smoking",
      "No pets",
      "No parties or events",
    ],
    healthInfo: [
      "Committed to Airbnb's enhanced cleaning process.",
      "Airbnb's social-distancing and other COVID-19-related guidelines apply",
      "Carbon monoxide alarm",
      "Smoke alarm",
    ],
    cancelPolicy:
      "Add your trip dates to get the cancellation details for this stay.",
    reviews: [
      {
        date: "June 2021",
        comment:
          "Cute little place in Richmond. Nice green space below the balcony, and cute bunnies all over the ground!",
        userId: "u10",
      },
      {
        date: "June 2021",
        comment:
          "I had a great time in Bert’s place. They are very friendly and I appriciate for their hospitality.",
        userId: "u11",
      },
      {
        date: "May 2021",
        comment:
          "Bert place is beautiful, strategically located in a clean and serene environment, 8 mins from the sky train Richmond mall and groceries stores.",
        userId: "u12",
      },
    ],
    ownerId: "o4",
  },
  {
    id: "r5",
    name: "Luxury Airbnb In The Heart Of Downtown",
    subTitle: "Entire rental unit in Kelowna",
    star: 5.0,
    reviewCount: 3,
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGl2aW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1593853772787-0fd2ad9a2c0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGtpdGNoZW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1609766975297-92f28e2db184?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGJlZHJvb218ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1612152605347-f93296cb657d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJlZHJvb218ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1622866305673-5c2a62f325ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGJhdGhyb29tfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    address: {
      country: "Canada",
      province: "British Columbia",
      city: "Kelowna",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78053.45149357508!2d-119.52083883236544!3d49.859262506124324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x20b57a4bb2b7e2a7!2sGuisachan%20Heritage%20Park!5e0!3m2!1sen!2sca!4v1626980837576!5m2!1sen!2sca",
    room: {
      maximumGuest: 4,
      bedroom: "1 bedroom",
      bed: "2 beds",
      bathroom: "1 bath",
    },
    highLights: [
      {
        icon: faHeart,
        title: "Highly rated host",
        description:
          "Owner has received 5-star ratings from 100% of recent guests.",
      },
      {
        icon: faMapMarkerAlt,
        title: "Great location",
        description: "100% of recent guests gave the location a 5-star rating.",
      },
      {
        icon: faBookmark,
        title: "Wifi",
        description: "Guests often search for this popular amenity",
      },
    ],
    additionalInfo: ["Entire home to yourself", "Committed to Enhanced Clean"],
    description:
      "A spacious, clean, and private apartment located in the heart of Richmond. You are 10 mins walk from CF Richmond shopping center and Richmond Brighouse skytrain station (Canada line) that can take you to YVR airport and downtown Vancouver. Minutes away from 7-Eleven convenience store, bus stops, more...",
    bedRoomInfo: [
      {
        bed: "Bedroom 1",
        type: "1 queen bed",
      },
      { bed: "Common spaces", type: "1 queen bed" },
    ],
    amenities: [
      {
        amenity: "Private beach access",
        icon: faUmbrellaBeach,
      },
      {
        amenity: "Kitchen",
        icon: faUtensils,
      },
      {
        amenity: "Wifi",
        icon: faWifi,
      },
      {
        amenity: "Free street parking",
        icon: faParking,
      },

      {
        amenity: "TV",
        icon: faTv,
      },
    ],
    rules: [
      "Check-in: 4:00 p.m. - 6:00 p.m.",
      "Checkout: 12:00 a.m.",
      "No smoking",
      "No pets",
      "No parties or events",
    ],
    healthInfo: [
      "Committed to Airbnb's enhanced cleaning process.",
      "Airbnb's social-distancing and other COVID-19-related guidelines apply",
      "Nearby lake, river, other body of water",
      "Carbon monoxide alarm",
      "Smoke alarm",
    ],
    cancelPolicy:
      "Add your trip dates to get the cancellation details for this stay.",
    reviews: [
      {
        date: "June 2021",
        comment:
          "This place is very clean and quiet. And you can walk to downtown in 10 minutes. I would like to visit again next time.",
        userId: "u14",
      },
      {
        date: "June 2021",
        comment:
          "I had a great time in Bert’s place. They are very friendly and I appriciate for their hospitality.",
        userId: "u13",
      },
      {
        date: "July 2021",
        comment:
          "It was located a 5-10 minute walk to Bernard street where there was every restaurant or store that you could want. The parking garage was excellent to take advantage of as well.",
        userId: "u12",
      },
      {
        date: "July 2021",
        comment:
          "We were absolutely amazed with the cleanliness, layout, and amenities provided in the apartment.",
        userId: "u3",
      },
      {
        date: "May 2021",
        comment: "Great",
        userId: "u5",
      },
      {
        date: "April 2021",
        comment: "Love this place",
        userId: "u4",
      },
    ],
    ownerId: "o5",
  },
  {
    id: "r6",
    name: "Okanagan Lake Paradise in s Stunning Sante Fe Home",
    subTitle: "Entire residential home in Kelowna",
    star: 4.95,
    reviewCount: 19,
    images: [
      "https://images.unsplash.com/photo-1549517045-bc93de075e53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1574&q=80",
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1591924450983-b8f7587ea332?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    address: {
      country: "Canada",
      province: "British Columbia",
      city: "Kelowna",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235074.7217879231!2d-119.72565407155261!3d49.86667070055433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537df36d499bbeb3%3A0x16e75f71d8abee54!2sKnox%20Mountain%20Park!5e0!3m2!1sen!2sca!4v1626990013393!5m2!1sen!2sca",
    room: {
      maximumGuest: 10,
      bedroom: "4 bedroom",
      bed: "7 beds",
      bathroom: "3.5 baths",
    },
    highLights: [
      {
        icon: faMedal,
        title: "Superhost",
        description:
          "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
      },
      {
        icon: faKey,
        title: "Great check-in experience",
        description:
          "100% of recent guests gave the check-in process a 5-star rating.",
      },
      {
        icon: faBookmark,
        title: "Pets allowed",
        description: "Guests often search for this popular amenity",
      },
    ],
    additionalInfo: [
      "Entire home to yourself",
      "Self check-in",
      "Committed to Enhanced Clean",
    ],
    description:
      "Looking for a slice of paradise in the Okanagan? This holiday home is sure to provide the experience and memories of a well-deserved vacation. Situated amongst award winning vineyards and across the street from Okanagan Lake, this 4 bedroom home with a massive sunny deck, beautiful lake views and a hot tub...",
    bedRoomInfo: [
      {
        bed: "Bedroom 1",
        type: "1 queen bed",
      },
      { bed: "Bedroom 2", type: "1 queen bed" },
      { bed: "Bedroom 3", type: "1 queen bed" },
      { bed: "Bedroom 4", type: "1 single bed" },
    ],
    amenities: [
      {
        amenity: "Hot tub",
        icon: faHotTub,
      },
      {
        amenity: "Kitchen",
        icon: faUtensils,
      },
      {
        amenity: "Wifi",
        icon: faWifi,
      },
      {
        amenity: "Free street parking",
        icon: faParking,
      },

      {
        amenity: "TV",
        icon: faTv,
      },
    ],
    rules: [
      "Check-in: After 3:00 p.m.",
      "Checkout: 11:00 a.m.",
      "Self check-in with smart lock",
      "No smoking",
      "Pets are allowed",
      "No parties or events",
    ],
    healthInfo: [
      "Committed to Airbnb's enhanced cleaning process.",
      "Airbnb's social-distancing and other COVID-19-related guidelines apply",
      "Security camera/recording device",
      "Carbon monoxide alarm",
      "Smoke alarm",
    ],
    cancelPolicy:
      "Add your trip dates to get the cancellation details for this stay.",
    reviews: [
      {
        date: "April 2021",
        comment:
          "An amazing house in a fantastic location. Robin was attentive and helpful the entire time. We can't wait to come back.",
        userId: "u7",
      },
      {
        date: "June 2021",
        comment:
          "I had a great time in this place. They are very friendly and I appriciate for their hospitality.",
        userId: "u8",
      },
      {
        date: "July 2021",
        comment:
          "Everything about the place was fantastic and somehow even better in person! Robin was very responsive with any questions we had and I would definitely like to stay here again!",
        userId: "u5",
      },
      {
        date: "July 2021",
        comment:
          "We were absolutely amazed with the cleanliness, layout, and amenities provided in the apartment.",
        userId: "u6",
      },
      {
        date: "May 2021",
        comment: "Great",
        userId: "u9",
      },
      {
        date: "April 2021",
        comment: "Love this place",
        userId: "u10",
      },
    ],
    ownerId: "o6",
  },
  {
    id: "r7",
    name: "Bright 1bedroom - convinient location",
    subTitle: "Entire guest suite - Victoria",
    star: 4.92,
    reviewCount: 12,
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60",
      "https://images.unsplash.com/photo-1593498208892-bf9d06296062?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGxpdmluZ3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGxpdmluZ3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1619440321660-bc0ce349b8f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGJhdGhyb29tfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    address: {
      country: "Canada",
      province: "British Columbia",
      city: "Victoria",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6759.488705667819!2d-123.31570612123605!3d48.42777140034396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f743f5484f51f%3A0x701868d904daaef8!2sHaynes%20Park!5e0!3m2!1sen!2sca!4v1627020950088!5m2!1sen!2sca",
    room: {
      maximumGuest: 3,
      bedroom: "1 bedroom",
      bed: "1 bed",
      bathroom: "1 bath",
    },
    highLights: [
      {
        icon: faMedal,
        title: "Superhost",
        description:
          "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
      },
      {
        icon: faKey,
        title: "Great check-in experience",
        description:
          "100% of recent guests gave the check-in process a 5-star rating.",
      },
      {
        icon: faBookmark,
        title: "Pets allowed",
        description: "Guests often search for this popular amenity",
      },
    ],
    additionalInfo: [
      "Entire home to yourself",
      "Self check-in",
      "Committed to Enhanced Clean",
    ],
    description:
      "This is the perfect home-away-from-home. The suite is ideal for singles or couples who are moving to Victoria but have yet to find their new home/community or those that have a work assignment in Victoria.",
    bedRoomInfo: [
      {
        bed: "Bedroom 1",
        type: "1 king bed",
      },
    ],
    amenities: [
      {
        amenity: "Pets allowed",
        icon: faPaw,
      },
      {
        amenity: "Kitchen",
        icon: faUtensils,
      },
      {
        amenity: "Wifi",
        icon: faWifi,
      },
      {
        amenity: "Free street parking",
        icon: faParking,
      },

      {
        amenity: "TV",
        icon: faTv,
      },
    ],
    rules: [
      "Check-in: After 4:00 p.m.",
      "Checkout: 11:00 a.m.",
      "Self check-in with smart lock",
      "No smoking",
      "Pets are allowed",
      "No parties or events",
    ],
    healthInfo: [
      "Committed to Airbnb's enhanced cleaning process.",
      "Airbnb's social-distancing and other COVID-19-related guidelines apply",
      "Security camera/recording device",
      "Carbon monoxide alarm",
      "Smoke alarm",
    ],
    cancelPolicy:
      "Add your trip dates to get the cancellation details for this stay.",
    reviews: [
      {
        date: "April 2021",
        comment: "Beautiful space in a great area! They were excellent hosts!",
        userId: "u10",
      },
      {
        date: "June 2021",
        comment:
          "I had a great time in this place. They are very friendly and I appriciate for their hospitality.",
        userId: "u1",
      },
      {
        date: "July 2021",
        comment:
          "Everything about the place was fantastic and somehow even better in person! Robin was very responsive with any questions we had and I would definitely like to stay here again!",
        userId: "u12",
      },
      {
        date: "July 2021",
        comment:
          "We were absolutely amazed with the cleanliness, layout, and amenities provided in the apartment.",
        userId: "u3",
      },
      {
        date: "May 2021",
        comment: "Loved it.",
        userId: "u9",
      },
      {
        date: "June 2021",
        comment:
          "Lovely space with great hosts. Convenient location to everything in Victoria, but especially downtown and lots of places to walk.",
        userId: "u9",
      },
    ],
    ownerId: "o7",
  },
  {
    id: "r8",
    name: "1 Bed + Den Penthouse with Ocean & Mountain views",
    subTitle: "Entire condominium in Delta",
    star: 5.0,
    reviewCount: 13,
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60",
      "https://images.unsplash.com/photo-1593498208892-bf9d06296062?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGxpdmluZ3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGxpdmluZ3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1619440321660-bc0ce349b8f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGJhdGhyb29tfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    address: {
      country: "Canada",
      province: "British Columbia",
      city: "Delta",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40600.25501720476!2d-123.0742861240924!3d49.03395792132491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485e6474301b6eb%3A0x2f7ee82454021306!2sCentennial%20Beach!5e0!3m2!1sen!2sca!4v1627023446087!5m2!1sen!2sca",
    room: {
      maximumGuest: 3,
      bedroom: "1 bedroom",
      bed: "2 beds",
      bathroom: "1 bath",
    },
    highLights: [
      {
        icon: faBookmark,
        title: "Wifi",
        description: "Guests often search for this popular amenity",
      },
    ],
    additionalInfo: ["Entire home to yourself", "Committed to Enhanced Clean"],
    description:
      "A bright North facing 1 Bed + Flex fully furnished 4th floor penthouse. Enjoy unobstructed ocean & mountain & park and city views. Watch sunrise in the morning and sunset in the...",
    bedRoomInfo: [
      {
        bed: "Bedroom 1",
        type: "1 king bed",
      },
      {
        bed: "Living room",
        type: "1 sofa bed",
      },
    ],
    amenities: [
      {
        amenity: "Waterfront",
        icon: faWater,
      },
      {
        amenity: "Kitchen",
        icon: faUtensils,
      },
      {
        amenity: "Wifi",
        icon: faWifi,
      },
      {
        amenity: "Free street parking",
        icon: faParking,
      },

      {
        amenity: "TV",
        icon: faTv,
      },
    ],
    rules: [
      "Check-in: 4:00 p.m. - 9:00 p.m.",
      "Checkout: 11:00 a.m.",
      "Self check-in with smart lock",
      "No smoking",
      "No pets",
      "No parties or events",
    ],
    healthInfo: [
      "Committed to Airbnb's enhanced cleaning process.",
      "Airbnb's social-distancing and other COVID-19-related guidelines apply",
      "Security camera/recording device",
      "Carbon monoxide alarm",
      "Smoke alarm",
    ],
    cancelPolicy:
      "Add your trip dates to get the cancellation details for this stay.",
    reviews: [
      {
        date: "April 2021",
        comment: "Beautiful space in a great area! They were excellent hosts!",
        userId: "u10",
      },
      {
        date: "June 2021",
        comment:
          "Very clean new apartment with a beautiful view of the mountains and the bay. Well equipped. Very helpful host. We recommend everyone.",
        userId: "u13",
      },
      {
        date: "July 2021",
        comment:
          "Everything about the place was fantastic and somehow even better in person! Robin was very responsive with any questions we had and I would definitely like to stay here again!",
        userId: "u14",
      },
      {
        date: "July 2021",
        comment:
          "We were absolutely amazed with the cleanliness, layout, and amenities provided in the apartment.",
        userId: "u2",
      },
      {
        date: "May 2021",
        comment: "Amazing place!",
        userId: "u4",
      },
      {
        date: "June 2021",
        comment:
          "Lovely space with great hosts. Convenient location to everything in Victoria, but especially downtown and lots of places to walk.",
        userId: "u9",
      },
    ],
    ownerId: "o8",
  },
  {
    id: "r9",
    name: "Central City Smart Home - High Tech Suite & Deck",
    subTitle: "Entire guesthouse in Surrey",
    star: 4.93,
    reviewCount: 224,
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGxpdmluZ3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "https://images.unsplash.com/photo-1613688684111-5c197974be20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80",
      "https://images.unsplash.com/photo-1617850687451-ac13e5534ba6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGtpdGNoZW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBlbnRyYW5jZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    ],
    address: {
      country: "Canada",
      province: "British Columbia",
      city: "Surrey",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221570.452251325!2d-122.98078219815739!3d49.123860508960774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9ec41c2e63d%3A0x1a79d0a667f30d86!2sBear%20Creek%20Park!5e0!3m2!1sen!2sca!4v1627074147537!5m2!1sen!2sca",
    room: {
      maximumGuest: 2,
      bedroom: "1 bedroom",
      bed: "1 beds",
      bathroom: "1 bath",
    },
    highLights: [
      {
        icon: faMedal,
        title: "Superhost",
        description:
          "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
      },
      {
        icon: faKey,
        title: "Great check-in experience",
        description:
          "100% of recent guests gave the check-in process a 5-star rating.",
      },
      {
        icon: faBookmark,
        title: "Pets allowed",
        description: "Guests often search for this popular amenity",
      },
    ],
    additionalInfo: [
      "Entire home to yourself",
      "Self check-in",
      "Committed to Enhanced Clean",
    ],
    description:
      "Specifically designed for today’s modern Airbnb traveler, this fully furnished suite is hotel alternative within Metro Vancouver for work or leisure. Located in the heart of Surrey – Canada’s fastest growing city – this unique suite is walking distance to Surrey Central Skytrain Station and a 35 minute train ride into downtown Vancouver. Travelers coming from...",
    bedRoomInfo: [
      {
        bed: "Bedroom 1",
        type: "1 king bed",
      },
    ],
    amenities: [
      {
        amenity: "Pets allowed",
        icon: faPaw,
      },
      {
        amenity: "Kitchen",
        icon: faUtensils,
      },
      {
        amenity: "Wifi",
        icon: faWifi,
      },
      {
        amenity: "Free street parking",
        icon: faParking,
      },

      {
        amenity: "TV",
        icon: faTv,
      },
    ],
    rules: [
      "Check-in: After 4:00 p.m.",
      "Checkout: 11:00 a.m.",
      "Self check-in with keypad",
      "Pest are allowed",
      "Smaking is allowed",
    ],
    healthInfo: [
      "Committed to Airbnb's enhanced cleaning process.",
      "Airbnb's social-distancing and other COVID-19-related guidelines apply",
      "Security camera/recording device",
      "Carbon monoxide alarm",
      "Smoke alarm",
    ],
    cancelPolicy:
      "Add your trip dates to get the cancellation details for this stay.",
    reviews: [
      {
        date: "April 2021",
        comment: "Beautiful space in a great area! They were excellent hosts!",
        userId: "u10",
      },
      {
        date: "June 2021",
        comment:
          "A very special place to stay! We enjoyed the big projector screen very much!",
        userId: "u3",
      },
      {
        date: "July 2021",
        comment:
          "Unique experience in a central location. We will definitely stay again in future travels.",
        userId: "u4",
      },
      {
        date: "July 2021",
        comment: "Great stay and awesome deck! Definitely recommend",
        userId: "u6",
      },
      {
        date: "May 2021",
        comment: "Amazing place!",
        userId: "u7",
      },
      {
        date: "June 2021",
        comment:
          "Lovely space with great hosts. Convenient location to everything in Victoria, but especially downtown and lots of places to walk.",
        userId: "u9",
      },
    ],
    ownerId: "o9",
  },
  {
    id: "r10",
    name: "Tofino Cabin",
    subTitle: "Entire cabin in Tofino",
    star: 4.91,
    reviewCount: 216,
    images: [
      "https://images.unsplash.com/photo-1563148760-64687068abdf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhYmlufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiaW4lMjBsaXZpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1591825381767-c7137b8eda0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FiaW4lMjBsaXZpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1586711696425-561bb5fd9f81?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTA4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1579110325751-a29ffec7af3f?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTIzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    address: {
      country: "Canada",
      province: "British Columbia",
      city: "Tofino",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83544.51854327972!2d-125.95618106552985!3d49.129075251979486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548990cebe929a1f%3A0x6858dd6bb49a0e96!2sTonquin%20Park!5e0!3m2!1sen!2sca!4v1627076897178!5m2!1sen!2sca",
    room: {
      maximumGuest: 2,
      bedroom: "1 bedroom",
      bed: "1 beds",
      bathroom: "1 bath",
    },
    highLights: [
      {
        icon: faMedal,
        title: "Superhost",
        description:
          "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
      },
      {
        icon: faKey,
        title: "Great check-in experience",
        description:
          "100% of recent guests gave the check-in process a 5-star rating.",
      },
      {
        icon: faMapMarkerAlt,
        title: "Great location",
        description: "100% of recent guests gave the location a 5-star rating.",
      },
    ],
    additionalInfo: [
      "Entire home to yourself",
      "Self check-in",
      "Committed to Enhanced Clean",
    ],
    description:
      "Cozy cabin in the forest, across the street from Chesterman Beach.",
    bedRoomInfo: [
      {
        bed: "Bedroom 1",
        type: "1 queen bed",
      },
    ],
    amenities: [
      {
        amenity: "Pets allowed",
        icon: faPaw,
      },
      {
        amenity: "Kitchen",
        icon: faUtensils,
      },
      {
        amenity: "Wifi",
        icon: faWifi,
      },
      {
        amenity: "Free street parking",
        icon: faParking,
      },

      {
        amenity: "TV",
        icon: faTv,
      },
    ],
    rules: [
      "Check-in: After 4:00 p.m.",
      "Checkout: 11:00 a.m.",
      "Self check-in with keypad",
      "Pest are allowed",
      "No smoking",
    ],
    healthInfo: [
      "Committed to Airbnb's enhanced cleaning process.",
      "Airbnb's social-distancing and other COVID-19-related guidelines apply",
      "Security camera/recording device",
      "Carbon monoxide alarm",
      "Smoke alarm",
    ],
    cancelPolicy:
      "Add your trip dates to get the cancellation details for this stay.",
    reviews: [
      {
        date: "April 2021",
        comment: "Beautiful space in a great area! They were excellent hosts!",
        userId: "u9",
      },
      {
        date: "June 2021",
        comment:
          "A very special place to stay! We enjoyed the big projector screen very much!",
        userId: "u10",
      },
      {
        date: "July 2021",
        comment:
          "Unique experience in a central location. We will definitely stay again in future travels.",
        userId: "u11",
      },
      {
        date: "July 2021",
        comment:
          "You can’t find a better location than this place if you’re looking for a place close to the beach. Amazing for short stays.",
        userId: "u12",
      },
      {
        date: "May 2021",
        comment: "Cool spot right next to the beach",
        userId: "u13",
      },
      {
        date: "June 2021",
        comment: "Great little place - and location. Would definitely go back",
        userId: "u14",
      },
    ],
    ownerId: "o10",
  },
  {
    id: "r11",
    name: "Mountain view room near Metrotown",
    subTitle: "Private room in residential home",
    star: 4.5,
    reviewCount: 120,
    images: [
      "https://images.unsplash.com/photo-1587048612458-fc7b5b2e7197?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJlZHJvb218ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1599603780100-9a9e42b0489f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGJhdGhyb29tfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1609266117579-5bb972860d27?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk2fHxraXRjaGVufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1615875882968-3e393f78765a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkyfHxsaXZpbmclMjByb29tfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1576&q=80",
    ],
    address: {
      country: "Canada",
      province: "British Columbia",
      city: "Burnaby",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166717.09584089107!2d-123.07027971381541!3d49.239349531004386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677a6363c6f03%3A0xc900c677924eb976!2sBurnaby%20Village%20Museum!5e0!3m2!1sen!2sca!4v1627078292911!5m2!1sen!2sca",
    room: {
      maximumGuest: 2,
      bedroom: "1 bedroom",
      bed: "1 beds",
      bathroom: "2 shared baths",
    },
    highLights: [
      {
        icon: faKey,
        title: "Great check-in experience",
        description:
          "100% of recent guests gave the check-in process a 5-star rating.",
      },
      {
        icon: faBookmark,
        title: "Wifi",
        description: "Guests often search for this popular amenity",
      },
    ],
    additionalInfo: ["Self check-in"],
    description:
      "My place is close to Metrotown Shopping Centre and Sky train Station.",
    bedRoomInfo: [
      {
        bed: "Bedroom 1",
        type: "1 queen bed",
      },
    ],
    amenities: [
      {
        amenity: "Kitchen",
        icon: faUtensils,
      },
      {
        amenity: "Wifi",
        icon: faWifi,
      },
      {
        amenity: "Free street parking",
        icon: faParking,
      },

      {
        amenity: "TV",
        icon: faTv,
      },
    ],
    rules: [
      "Check-in: After 4:00 p.m. - 11:00 p.m.",
      "Checkout: 11:00 a.m.",
      "Self check-in with keypad",
      "Not suitable for children and infants",
      "No pets",
      "No smoking",
      "No parties or events",
    ],
    healthInfo: [
      "Committed to Airbnb's enhanced cleaning process.",
      "Airbnb's social-distancing and other COVID-19-related guidelines apply",
      "Security camera/recording device",
      "Carbon monoxide alarm",
      "Smoke alarm",
    ],
    cancelPolicy:
      "Add your trip dates to get the cancellation details for this stay.",
    reviews: [
      {
        date: "April 2021",
        comment: "Great place to stay. Very good value.",
        userId: "u9",
      },
      {
        date: "June 2021",
        comment:
          "Overall, this place is a good opportunity to spend less money. You have a parking spot in front of the house and the cleanliness is ok.",
        userId: "u10",
      },
      {
        date: "July 2021",
        comment:
          "Unique experience in a central location. We will definitely stay again in future travels.",
        userId: "u11",
      },
      {
        date: "July 2021",
        comment:
          "You can’t find a better location than this place if you’re looking for a place close to the beach. Amazing for short stays.",
        userId: "u12",
      },
      {
        date: "May 2021",
        comment:
          "Comfortable and clean. Best place to stay is the Burnaby area", ///////////////////////          bv
        userId: "u13",
      },
      {
        date: "June 2021",
        comment: "Great little place - and location. Would definitely go back",
        userId: "u14",
      },
    ],
    ownerId: "o11",
  },
];
export function getAllRooms() {
  return ROOMS;
}
export function getRoomById(id) {
  return ROOMS.find((room) => room.id === id);
}
