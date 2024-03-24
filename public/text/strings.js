const graySvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600">
  <defs>
    <style>.a{fill:#eeeeee;mix-blend-mode:pass-through}</style>
  </defs>
  <rect class="a" width="1000" height="600"/>
</svg>
`;
const base64String = `data:image/svg+xml;base64,${Buffer.from(graySvg).toString('base64')}`;

const introduction=[
  `As a licensed architect and software developer based in Taiwan, Archie graduated from National Cheng Kung University with a major in architecture. This portfolio serves as a demonstration of his diverse capabilities, showcasing a range of architectural projects and expertise in software development.`, 
  `Archie's journey began with a focus on collective housing design and urban renewal. Driven by an intrinsic passion for technology, he made a pivotal career shift into software development. He's currently enrolled in the Department of Information Management at National Taiwan University.`
];

export { base64String, introduction };