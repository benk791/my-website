export default function main() {
  return (
    <div className="container">
      <h1>Style Guide</h1>
      <section>
        <h2>Colours</h2>
        <div className="colours grid grid-cols-3 gap-2 p-10 md:grid-cols-4">
          <div className="colour-box">
            <div className="p-5 mb-5 bg-themePrimary text-themeText">
              <h3>
                Deep Blue
                <br />
                #182846
              </h3>
              <h4>Theme Primary</h4>
            </div>
            <p>Background colour for most aspects of the website</p>
          </div>
          <div className="colour-box">
            <div className="p-5 mb-5 bg-themeSecondary text-themePrimary">
              <h3>
                Soft Purple
                <br />
                #856E99
              </h3>
              <h4>Theme Secondary</h4>
            </div>
            <p>Primary higlight colour (headers/footers and titles)</p>
          </div>
          <div className="colour-box">
            <div className="p-5 mb-5 bg-themeTertiary text-themePrimary">
              <h3>
                Briny Blue
                <br />
                #2E5D74
              </h3>
              <h4>Theme Tertiary</h4>
            </div>
            <p> Secondary higlight colour (used if a third colour is needed)</p>
          </div>
          <div className="colour-box">
            <div className="p-5 mb-5 bg-themeText text-themePrimary">
              <h3>
                Chill Grey
                <br />
                #9F9F9F
              </h3>
              <h4>Theme Text</h4>
            </div>
            <p>Text colour used against Deep blue for all basic text</p>
          </div>
          <div className="colour-box">
            <div className="p-5 mb-5 bg-themeHighlight text-themePrimary">
              <h3>
                Candyfloss Pink
                <br />
                #FFB3E3
              </h3>
              <h4>Theme Highlight</h4>
            </div>
            <p>Highlight colour for currently selected sections / links</p>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-2">
      <section className="styles">
          <h2>Styles</h2>
          <h1 className="text-left pt-0 pb-1">h1: Page head</h1>
          <ul>
            <li><a>font-weight</a>: bold</li>
            <li><a>font-size</a>: 300%</li>
            <li><a>color</a>: #856E99</li>
            <li><a>text-transform</a>: uppercase</li>
          </ul>
          <h2 className="demo pt-5 pb-1">H2: section head</h2>
          <ul>
            <li><a>font-size</a>: x-large</li>
            <li><a>font-weight</a>: bold</li>
            <li><a>color</a>: #856E99</li>
            <li>on section highlight: <a>color</a>: #FFB3E3</li>
          </ul>
          <h3 className="pt-5 pb-1">H3: subheading</h3>
          <ul>
          <li><a>font-size</a>: large</li>
	        <li><a>font-weight</a>: bold</li>
          <li><a>color</a>: #9F9F9F</li>
	        <li><a>text-decoration</a>: underline</li>
	        <li><a>text-decoration-color</a>: #856E99</li>
          </ul>
          <p className="pt-5 pb-2">p: paragraph text</p>
          <ul>
            <li><a>color</a>: #9F9F9F</li>
          </ul>
        </section>
        <section>
          <h2>Fonts</h2>
          <h3>Arial</h3>
          <p>Sphinx of black quartz, judge my vow</p>
          <p><strong>Sphinx of black quartz, judge my vow</strong></p>
          <p><em>Sphinx of black quartz, judge my vow</em></p>
        </section>
      </div>
    </div>
  );
}
