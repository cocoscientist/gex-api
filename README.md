## An API for Gex Quotes!
This API serves to return quotes from the game *Gex - Enter the Gecko!* <br />
Quotes are stored in an array of objects of the format
```
    {
        "level":<level name - String>,
        "quotes":<Quotes list from level - array of Strings>
    }
```
### Features
- Return all the quotes by going to /api/quote
- Return all the quotes from a level by going to /api/quote?level="level name"
- Return a random quote by going to /api/random
- Return a random quote from a particular level by going to /api/random?level="level name"
- Return an object containing a random level and quotes from that level by going to /api/level