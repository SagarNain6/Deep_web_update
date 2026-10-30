const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Extract the stats section
const statsRegex = /\s*<!-- Statistics Section -->[\s\S]*?<\/section>/;
const statsMatch = content.match(statsRegex);

if (statsMatch) {
    const statsHTML = statsMatch[0];
    
    // Remove it from its original location
    content = content.replace(statsRegex, '');
    
    // Insert it right after the Hero Section (before About Intro Section)
    const aboutIntroRegex = /\s*<!-- About Intro Section -->/;
    content = content.replace(aboutIntroRegex, statsHTML + '\n\n    <!-- About Intro Section -->');
    
    fs.writeFileSync('index.html', content);
    console.log('Moved stats section!');
} else {
    console.log('Could not find stats section.');
}
