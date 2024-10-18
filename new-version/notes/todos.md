# Todos 


## Setup
  [v] Install and create New Astro Project
  [v] Install and configure Tailwind
  [v] Install Vue
  [v] update config to run in server mode (SSR)
  [v] set folder aliasses in `tsconfig.json` so `@` can be used in imports to shorten path
  [v] install json-server
    [v] add "server" script to package.json

## Structure
  layout:
    [v] main layout

  pages:
    [v] index
    [v] past events
    [v] events page
      [] design layout
    [v] dynamic event page
    [] 404 page
      - added but marked it `_` so we don't use it yet
    
  components:
    [v] Navbar
      [] skeleton
      [] styling
    [v] Hero
    [v] Upcoming Events
    [v] SE-Teaser
    [v] Initiatives
    [v] Footer
  
  Api:
    []events
      [v] GET all events - /api/events
      [v] GET event by id - /api/events/[eventId]
      [] GET event by Slug
        - won't work with json-server, so it's for later

