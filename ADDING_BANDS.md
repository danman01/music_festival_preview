# Adding Band Information to a Festival

## Quick Start

When you have a new festival with real bands, follow these steps:

### 1. Create a bands list file

Create `bands_list.txt` in your festival folder with this format:

```
Band Name | Genre | Link Preference
Havrok | Rock | https://havrok.bandcamp.com
Dan Blakeslee | Folk | https://danblakeslee.com
Morning Weather | Folk | search
```

**Link Preference options:**
- Full URL (personal site or Bandcamp preferred)
- `search` - will use YouTube search
- `tbd` - placeholder for later

### 2. Research Band Info

For each band, gather:
- **Description**: 1-2 sentences about their sound/style
- **Best music link**: Personal site > Bandcamp > YouTube > Spotify
- **Image**: Band photo (save to `bands/bandname.jpg`)
- **Social links**: Instagram, Facebook, Spotify (optional)

### 3. Add to data.json

Add a `bandDetails` section to your `data.json`:

```json
{
  "festival": { ... },
  "venues": [ ... ],
  "genres": { ... },
  "bandDetails": {
    "Havrok": {
      "description": "Heavy metal powerhouse from New Hampshire known for crushing riffs and intense live performances.",
      "image": "bands/havrok.jpg",
      "website": "https://havrok.bandcamp.com",
      "musicLink": "https://havrok.bandcamp.com",
      "socialLinks": {
        "instagram": "https://instagram.com/havrokband",
        "facebook": "",
        "spotify": "https://open.spotify.com/artist/xxx"
      }
    },
    "Dan Blakeslee": {
      "description": "Keene's legendary folk singer-songwriter, blending Americana storytelling with raw emotional depth.",
      "image": "bands/dan_blakeslee.jpg",
      "website": "https://danblakeslee.com",
      "musicLink": "https://danblakeslee.bandcamp.com",
      "socialLinks": {
        "instagram": "https://instagram.com/danblakeslee",
        "facebook": "https://facebook.com/danblakesleemusic",
        "spotify": ""
      }
    }
  },
  "itineraries": [ ... ]
}
```

### 4. Add Band Images

Save band photos to `bands/` folder:
```
2026/NH/festival_name/
├── bands/
│   ├── havrok.jpg
│   ├── dan_blakeslee.jpg
│   └── morning_weather.jpg
```

**Image specs:**
- Aspect ratio: 16:9 or 4:3
- Minimum width: 600px
- Format: JPG or PNG
- Compressed for web

### 5. Create Itineraries

Add curated day plans to `data.json`:

```json
{
  "itineraries": [
    {
      "id": "rock-lovers",
      "name": "Rock Lover's Marathon",
      "description": "Hit all the best rock acts across multiple venues",
      "emoji": "🎸",
      "schedule": [
        {
          "time": "14:00",
          "band": "Havrok",
          "venue": "City Tire",
          "note": "Start strong with heavy riffs"
        },
        {
          "time": "18:00",
          "band": "Dead By Sunrise",
          "venue": "City Tire",
          "note": "Evening energy boost"
        }
      ]
    }
  ]
}
```

## Research Tips

### Finding Band Info

1. **Search order**: `[Band Name] + [genre] + bandcamp/official site`
2. **Verify it's the right band**: Check location, recent activity
3. **Check multiple sources**: Bandcamp, Facebook, Instagram, Spotify

### Writing Descriptions

Good description format:
```
[Genre/style] [from location] known for [distinctive quality]. [Additional context or achievement].
```

Examples:
- "Experimental folk collective blending ancient storytelling with modern soundscapes. Their haunting melodies transport listeners to forgotten landscapes."
- "Indie rock quartet from Keene pushing boundaries with math-rock rhythms and atmospheric guitars."
- "Solo acoustic performer known for intimate, confessional songwriting about New England life."

### Link Priority

1. **Personal website** (best for legitimacy)
2. **Bandcamp** (direct support, full discography)
3. **YouTube** (accessible, visual)
4. **Spotify/Apple Music** (last resort, platform lock-in)

### Image Sources

- Band's official Facebook/Instagram
- Bandcamp artist photos
- Press photos from their website
- Festival announcement graphics
- **Always credit photographers if known**

## Automation Ideas

### Batch Band Lookup Script

Create `lookup_bands.sh`:
```bash
#!/bin/bash
while IFS='|' read -r name genre link; do
  echo "=== $name ==="
  echo "Genre: $genre"
  echo "Searching..."
  open "https://bandcamp.com/search?q=$name"
  open "https://www.instagram.com/explore/tags/$name"
  read -p "Press enter for next band..."
done < bands_list.txt
```

Usage:
```bash
chmod +x lookup_bands.sh
./lookup_bands.sh
```

### JSON Template Generator

For a new festival, copy this starter template:

```json
{
  "festival": {
    "name": "Festival Name 2026",
    "date": "2026-09-05",
    "dateDisplay": "Saturday, September 5, 2026",
    "location": "City, State",
    "posterImage": "poster.jpg"
  },
  "venues": [],
  "genres": {},
  "bandDetails": {},
  "itineraries": [],
  "links": {
    "website": "",
    "facebook": "",
    "instagram": ""
  }
}
```

## Common Issues

### Band name conflicts
- Add location to search: "Morning Weather New Hampshire"
- Check formation year
- Look for festival announcements to confirm

### No online presence
- Use YouTube search link as fallback
- Description: "Local [genre] act from [location]"
- No image: Use festival logo or placeholder

### Incomplete info
- It's OK to launch with partial data
- Add `"tbd": true` flag to mark incomplete entries
- Can fill in later as you discover more

## Examples from Real Festivals

See `gpt_band_info.txt` for examples of real festival band research.

## Quick Checklist

Before launching:
- [ ] All band names spelled correctly
- [ ] Music links tested (actually work)
- [ ] Images optimized for web
- [ ] At least 2-3 itineraries created
- [ ] Descriptions proofread
- [ ] Social links verified (no 404s)
- [ ] Genre classifications match band styles
