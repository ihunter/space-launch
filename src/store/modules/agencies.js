
export default {
  state: {
    agencies: [
      {
        id: 88,
        name: 'China Aerospace Science and Technology Corporation',
        countryCode: 'CHN',
        abbrev: 'CASC',
        enabled: true,
        description: `The China Aerospace Science and Technology Corporation (CASC) is the main contractor for the Chinese space program. It is state-owned and has a number of subordinate entities which design, develop and manufacture a range of spacecraft, launch vehicles, strategic and tactical missile systems, and ground equipment. It was officially established in July 1999 as part of a Chinese government reform drive, having previously been one part of the former China Aerospace Corporation. Various incarnations of the program date back to 1956.`
      },
      {
        id: 121,
        name: 'SpaceX',
        countryCode: 'USA',
        abbrev: 'SpX',
        enabled: true,
        description: `Space Exploration Technologies Corp., doing business as SpaceX, is a private American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX has since developed the Falcon launch vehicle family and the Dragon spacecraft family, which both currently deliver payloads into Earth orbit.`
      },
      {
        id: 63,
        name: 'Russian Federal Space Agency (ROSCOSMOS)',
        countryCode: 'RUS',
        abbrev: 'RFSA',
        enabled: true,
        description: `ROSCOSMOS is a State Corporation that was established in August 2015 to oversee and implement a comprehensive reform of the Russian space industry.
        State Space Corporation ROSCOSMOS ensures the implementation of the Russian government’s space program and its legal regulation. ROSCOSMOS is also placing orders for the development, manufacture and supply of space equipment and space infrastructure objects.
        The state corporation is also responsible for international space cooperation and tasked with setting the stage for the future use of results of space activities in the social and economic development of Russia.`
      },
      {
        id: 124,
        name: 'United Launch Alliance',
        countryCode: 'USA',
        abbrev: 'ULA',
        enabled: true,
        description: `United Launch Alliance (ULA) is a provider of spacecraft launch services to the United States government. It was formed as a joint venture between Lockheed Martin Space Systems and Boeing Defense, Space & Security in December 2006 by combining the teams at the two companies.`
      },
      {
        id: 115,
        name: 'Arianespace',
        countryCode: 'FRA',
        abbrev: 'ASA',
        enabled: true,
        description: `Arianespace SA is a multinational company founded in 1980 as the world's first commercial launch service provider.[2] It undertakes the operation and marketing of the Ariane programme.[3] The company offers a number of different launch vehicles: the heavy-lift Ariane 5 for dual launches to geostationary transfer orbit, the Soyuz-2 as a medium-lift alternative, and the solid-fueled Vega for lighter payloads.`
      },
      {
        id: 44,
        name: 'National Aeronautics and Space Administration',
        countryCode: 'USA',
        abbrev: 'NASA',
        enabled: true,
        description: `The National Aeronautics and Space Administration is an independent agency of the United States Federal Government responsible for the civilian space program, as well as aeronautics and aerospace research.`
      },
      {
        id: 31,
        name: 'Indian Space Research Organization',
        countryCode: 'IND',
        abbrev: 'ISRO',
        enabled: true,
        description: `The Indian Space Research Organisation is the space agency of the Government of India headquartered in the city of Bengaluru. Its vision is to "harness space technology for national development while pursuing space science research and planetary exploration."`
      }
    ]
  },
  getters: {
    agencies (state) {
      return state.agencies
    },
    filteredAgencies (state) {
      return state.agencies.filter(agency => agency.enabled)
    },
    getAgencyById (state) {
      return id => state.agencies.find(agency => agency.id === id)
    }
  }
}
