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
  utils: 
    [v] getDateFormatted

  layout:
    [v] main layout

  pages:
    [v] index
    [v] past events
    [v] events page
      [] design layout
    [v] dynamic event page
      [v] fetch the event from the api
      [v]dates
        [v] format to correct string and render

    [] 404 page
      - added but marked it `_` so we don't use it yet
    
  components:
    [v] Navbar
      [] skeleton
      [] styling
    [v] Hero
    [v] Upcoming Events
      [v] fetch events
      [v] display events data 
    [v] SE-Teaser
    [v] Initiatives
    [v] Footer
    
    [v] UI:
      [v] EventCard
        [] display event title
        [] display other event data
      [v] EventImage
        [v] dynamically import images using `import.meta.glob`
        [v] render with Image component
  
  Api:
    []events
      [v] GET all events - /api/events
      [v] GET event by id - /api/events/[eventId]
      [] GET event by Slug
        - won't work with json-server, so it's for later
      [v] POST new event - /api/events
      [v] PUT event handler by ID - /api/events/[eventId] 
        - ! important to make sure we send over the full event object, JSON-SERVER replaces the whole object
      [v] DELETE event handler - /api/events/[eventId]
        

