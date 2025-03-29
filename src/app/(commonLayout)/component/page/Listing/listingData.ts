import { IListingData } from "@/types/property.type";

export const listingData: IListingData[] = [
  {
    id: "1",
    title: "House share Finchley Road",
    rent: 1100,
    currency: "GBP",
    payment_frequency: "pcm",
    room_type: "double",
    deposit: 1100,
    bills_included: true,
    availability: {
      available_from: "Now",
      minimum_term: "3 months",
      maximum_term: "None",
    },
    location: {
      area: "Opposite ESCP Business School",
      transport_links: "Excellent",
    },
    description:
      "Fully furnished master bedroom in a 4-bedroom flat Shared kitchen & bathroom Modern & comfortable living space",
    contract_terms: {
      deposit: "1 month’s rent",
      minimum_stay: "3 months",
      students_recent_graduates: "3 months' rent upfront + deposit required",
      self_employed_non_working: "Single occupancy only – No couples",
      employed: "Single occupancy only – No couples",
    },
    whats_included: [
      "All bills covered - No extra costs!",
      "Free high-speed WiFi – Work & stream with ease",
      "Mobile App – Quick support & maintenance requests",
    ],

    amenities: {
      furnishings: "Furnished",
      parking: false,
      garage: false,
      garden_patio: false,
      balcony_roof_terrace: false,
      disabled_access: false,
      living_room: "No",
      broadband_included: true,
    },
    household: {
      total_flatmates: 3,
      total_rooms: 4,
      smoker: false,
      any_pets: false,
      occupation: "Other",
      gender: "2 Females, 1 Male",
    },

    preferences: {
      couples_ok: false,
      smoking_ok: true,
      pets_ok: false,
      occupation: "Available to all",
      references_required: true,
      minAge: 18,
      maxAge: 40,
    },
    image_urls: [
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/49/95498544.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/49/95498546.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/49/95498547.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/49/95498548.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/49/95498549.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },

      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/49/95498550.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/49/95498551.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/49/95498552.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
    ],
  },

  {
    id: "2",
    title: "Flat share Poplar",
    rent: 1300,
    currency: "GBP",
    payment_frequency: "pcm",
    room_type: "double En suite",
    deposit: 858,
    bills_included: true,
    availability: {
      available_from: "01 Apr 2025",
      minimum_term: "3 months",
      maximum_term: "None",
    },
    location: {
      area: "Poplar, E14 – Excellent transport links!",
      transport_links: "Excellent",
    },
    contract_terms: {
      minimum_stay: "3 months",
      students_recent_graduates: "3 months' rent upfront + deposit required",
      self_employed_non_working:
        "Must provide proof of sufficient income or follow the same upfront payment rule",
    },
    whats_included: [
      "All bills covered - No extra costs!",
      "Fibre high-speed internet – Stay connected",
      "Private ensuite bathroom – Enjoy your own space!",
      "Ongoing maintenance – Stress-free living",
    ],
    amenities: {
      furnishings: "Furnished",
      parking: false,
      garage: false,
      garden_patio: false,
      balcony_roof_terrace: false,
      disabled_access: false,
      living_room: "Shared",
      broadband_included: true,
    },
    household: {
      total_flatmates: 2,
      total_rooms: 4,
      smoker: false,
      any_pets: false,
      occupation: "Other",
      gender: "2 Females",
    },
    preferences: {
      couples_ok: true,
      smoking_ok: true,
      pets_ok: true,
      occupation: "Available to all",
      references_required: true,
    },

    image_urls: [
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/25/95256611.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/25/95256612.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/25/95256613.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/25/95256615.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
    ],
  },

  {
    id: "3",
    title: "1 Double Room in Seven Sisters",
    rent: 775,
    currency: "GBP",
    payment_frequency: "pcm",
    room_type: "Double",
    deposit: 511.5,
    bills_included: true,
    description:
      "This is a 6 bedroom house with 1 shared kitchen, 3 bathrooms and a garden Room 3 - Rent £775| Rental Refund £511.5 Both rooms are for single occupants only.",
    availability: {
      available_from: "Now",
      minimum_term: "3 months",
      maximum_term: "None",
    },
    location: {
      area: "Seven Sisters Station",
      transport_links: "Excellent",
    },
    contract_terms: {
      minimum_stay: "3 months",
      students_recent_graduates:
        " 3 months' rent upfront will be asked (+ security deposit)",
      employed: "single occupants only",
    },
    whats_included: [
      "All bills are included (Gas, Electricity, Water, Council Tax, Internet)",
      "Fibre high-speed internet",
      "Maintenance provided",
    ],
    amenities: {
      furnishings: "Furnished",
      parking: false,
      garage: false,
      garden_patio: true,
      balcony_roof_terrace: false,
      disabled_access: false,
      living_room: "No",
      broadband_included: true,
    },
    household: {
      total_flatmates: 2,
      total_rooms: 4,
      smoker: false,
      any_pets: false,
      occupation: "Other",
      gender: "2 Females",
    },
    preferences: {
      couples_ok: false,
      smoking_ok: true,
      pets_ok: false,
      occupation: "Available to all",
      references_required: true,
      minAge: 18,
      maxAge: 40,
    },

    image_urls: [
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/34/95343131.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/34/95343132.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/95/34/95343133.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/89/82/89825513.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/89/90/89909404.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/89/90/89909403.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
      {
        src: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/89/90/89909405.jpg",
        alt: "Exterior",
        thumbnail: "/placeholder.svg?height=200&width=200&text=Exterior",
      },
    ],
  },
];
