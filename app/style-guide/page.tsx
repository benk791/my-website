export default function main() {
  return (
    <div className="container">
      <h1>Style Guide</h1>
      <section>
        <h2>Colours</h2>
        <div className="colours grid grid-cols-3 gap-2 p-10">
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
    </div>
  );
}
