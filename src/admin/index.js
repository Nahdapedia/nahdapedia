// Usage with import from npm package
import CMS from 'netlify-cms'


CMS.registerWidget(
      'uuid',
      createClass({
        getDefaultProps: function() {
          return {
            value: ''
          }
        },
        uuid: function(options) {
          options = options || {};
          var size = options.size || 21;
          var url = options.url || "Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-";
          var id = "";

          if (typeof self === "undefined" || (!self.crypto && !self.msCrypto)) {
            while (0 < size--) {
              id += url[(Math.random() * 64) | 0];
            }
            return id;
          }

          // else
          var crypto = self.crypto || self.msCrypto;
          id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => 
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            )
          return id;
        },
        componentDidMount: function() {
          var value = this.props.value;
          var onChange = this.props.onChange;
          var uuid = this.uuid;

          if (!value) {
            onChange(uuid());
          }
        },
        render: function() {
          var value = this.props.value;
          var classNameWrapper = this.props.classNameWrapper;
          var forID = this.props.forID;

          return h('span', { id: forID, className: classNameWrapper }, value);
        }
      })
    );
