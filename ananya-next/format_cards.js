const fs = require('fs');
const file = 'src/lib/servicesData.ts';
let content = fs.readFileSync(file, 'utf8');

// The goal is to standardise the packageHtml strings for all services.
// 1. Remove duplicate headings outside the card.
content = content.replace(/<h4 class="fw-bold mb-3">.*?<\/h4>\s*<p class="text-muted mb-4 small">.*?<\/p>\s*/g, '');

// 2. Standardize the outer card div
content = content.replace(/<div class="card shadow-sm[^>]*">/g, '<div class="package-card h-100 shadow-sm border-0 rounded-4 overflow-hidden">');
content = content.replace(/<div class='card shadow-sm[^>]*'>/g, "<div class='package-card h-100 shadow-sm border-0 rounded-4 overflow-hidden'>");

// 3. Standardize card-header to package-header
content = content.replace(/class="card-header/g, 'class="package-header');
content = content.replace(/class='card-header/g, "class='package-header");

// 4. Standardize card-body to package-body
content = content.replace(/class="card-body/g, 'class="package-body');
content = content.replace(/class='card-body/g, "class='package-body");

// 5. Standardize footer div
content = content.replace(/<div class="text-center mt-4">/g, '<div class="text-center mt-4 pt-2 border-top">');
content = content.replace(/<div class='text-center mt-4'>/g, "<div class='text-center mt-4 pt-2 border-top'>");

// 6. Standardize button style
// The button should look like: style="background-color: #064267; border: none; color: #fff !important;"
const buttonStyleRegex = /style="background-color:\s*#[0-9a-fA-F]+;\s*border:\s*[^;"]+;\s*color:\s*#fff\s*!important;(?:\s*font-weight:\s*700;)*"/g;
content = content.replace(buttonStyleRegex, 'style="background-color: #064267; border: none; color: #fff !important;"');

const buttonStyleRegex2 = /style='background-color:\s*#[0-9a-fA-F]+;\s*border:\s*[^;']+;\s*color:\s*#fff\s*!important;(?:\s*font-weight:\s*700;)*'/g;
content = content.replace(buttonStyleRegex2, "style='background-color: #064267; border: none; color: #fff !important;'");

// There is one button with style="background-color: #1485cb; border: none;"
content = content.replace(/style="background-color: #1485cb; border: none;"/g, 'style="background-color: #064267; border: none; color: #fff !important;"');

// For buttons that don't have style inline, but have class "btn-video-project", maybe add style?
content = content.replace(/class="btn text-white rounded-pill px-4 py-2 shadow-sm btn-video-project"\s*style="[^"]*"/g, 'class="btn btn-primary rounded-pill px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2" style="background-color: #064267; border: none; color: #fff !important;"');

// Fix buttons that might have not matched
content = content.replace(/style='background-color: #0070bb; border: none; color: #fff !important;'/g, "style='background-color: #064267; border: none; color: #fff !important;'");
content = content.replace(/style="background-color: #0070bb; border: none; color: #fff !important;"/g, 'style="background-color: #064267; border: none; color: #fff !important;"');

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated servicesData.ts');
