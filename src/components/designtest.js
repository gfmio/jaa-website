
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return <div class="col1">
    <h1>Hello World!</h1>
    <p>This is some sample content.</p>
    <p>This is some sample content.</p>
    <h1>h1 Hello World!</h1>
    <p>This is some sample content.</p>
    <h2>h2 Hello World!</h2>
    <p>This is some sample content.</p>
    <h3>h3 Hello World!</h3>
    <p>This is some sample content.</p>
    <h4>h4 Hello World!</h4>
    <p>This is some sample content.</p>
    <h5>h5 Hello World!</h5>
    <p>This is some sample content.</p>
    <h6>h6 Hello World!</h6>
    <p>This is some sample content.</p>

    <h1>Lists</h1>
    <p>This is some sample content.</p>
    <ul>
      <li>This is some sample content.</li>
      <li>This is some sample content.</li>
      <li>This is some sample content.</li>
    </ul>
    <p>This is some sample content.</p>
    <ol>
      <li>This is some sample content.</li>
      <li>This is some sample content.</li>
      <li>This is some sample content.</li>
    </ol>
    <p>This is some sample content.</p>
    <dl>
      <dd>This is some sample content.</dd>
      <dd>This is some sample content.</dd>
      <dd>This is some sample content.</dd>
    </dl>
    <p>This is some sample content.</p>

    <p>
      Code blocks<br/>
      Rules
    </p>

    <h1>Media</h1>
    <figure>
      <img src="http://www.laughspark.info/uploadfiles/10-cute-cats-around-us-that-make-our-lif-635727820001619965-13696.jpg" alt="alt" />
      <figcaption>LOL.</figcaption>
    </figure>

    <div class="p">
      <div style="position:relative;height:0;padding-bottom:56.25%">
        <iframe src="https://www.youtube.com/embed/1H0hrACFunA?ecver=2"
          width="640" height="360" frameborder="0"
          style="position:absolute;width:100%;height:100%;left:0"
          allowfullscreen>
        </iframe>
      </div>
    </div>

    <p>
      Rounded images<br/>
      Audio<br/>
      Extra component for video and similar embeds
    </p>

    <h1>Forms</h1>

    <form>
      <input type="text" />
      <textarea></textarea>
      <input type="password" />
      <input type="email" />
      <input type="search" />
      <input type="date" />
      <input type="time" />
      <input type="datetime" />
      <input type="checkbox" label="abc" />
      <input type="checkbox" label="abc" />
      <input type="checkbox" label="abc" />

      <input type="radio" label="abc" />
      <input type="radio" label="abc" />
      <input type="radio" label="abc" />

      <select>
        <option value="ABC">ABC</option>
        <option value="KLM">KLM</option>
        <option value="XYZ">XYZ</option>
      </select>

      <select multiple>
        <option value="ABC">ABC</option>
        <option value="KLM">KLM</option>
        <option value="XYZ">XYZ</option>
      </select>

      <input type="file" />

      <p>
        AddressForm<br/>
        FileDropper<br/>
        Remove highlight on select<br/>
        Labels<br/>
        Placeholder<br/>
        Notes + Warnings<br/>
        Round buttons incl icons<br/>
        Map selector<br/>
        Multi-form pages<br/>
        Form sections
      </p>

      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
      <button>Button</button>
    </form>

    <h1>Interactive and animated elements</h1>

    <p>
      Interative open / close<br/>
      Animations (continuous and onEvent)<br/>
      Model update Animations<br/>
      Map
    </p>

    <h1>Structural elements</h1>

    <p>
      Flexbox container<br/>
      Grids<br/>
      Header<br/>
      Footer<br/>
      Stickiness<br/>
      Flexbox polyfill<br/>
      Tile view with pictures and some interactive stuff there<br/>
      Tile + grid view for profiles / cards / online shop<br/>
      Navigation bar<br/>
      Background images + hipster effects ;-)<br/>
      Animated transitions between pages<br/>
    </p>

    <h1>Technical features</h1>

    <p>
      Google / FB / Twitter / ... login<br/>
      Communication with APIs<br/>
      Local storage<br/>
      Session management<br/>
      Live comms with Websocket<br/>
      Online payment form
    </p>

    <h1>Styling</h1>

    <p>
      Style Guides / Rules (esp. as components)<br/>
      Colors<br/>
      Gradients
    </p>

  </div>
}
