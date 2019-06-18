function SVG(attributes, parent) {
  const self = this;

  function createNode(name, attributes, text) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", name);
    for (const key in attributes) {
      if (key.startsWith('_') || key === 'onclick') {
        continue;
      }

      element.setAttributeNS(null, key.replace(/[A-Z]/g, function(match) {
        return "-" + match.toLowerCase();
      }), attributes[key]);
    }
    if (text) {
      const textNode = document.createTextNode(text);
      element.appendChild(textNode);
    }

    if (attributes.onclick) {
      element.onclick = function(event) {
        event.stopPropagation();
        attributes.onclick(event);
      };
    }
    return element;
  }

  function add(name, attributes, text) {
    const element = createNode(name, attributes, text);
    current.appendChild(element);
    return self;
  }

  const root = createNode('svg', attributes);

  (parent) ? parent.appendChild(root) : document.body.appendChild(root);

  let current = root;

  self.circle = function(attributes) {
    return add('circle', attributes);
  };

  self.ellipse = function(attributes) {
    return add('ellipse', attributes);
  };

  self.line = function(attributes) {
    return add('line', attributes);
  };

  self.path = function(attributes) {
    return add('path', attributes);
  };

  self.polygon = function(attributes) {
    return add('polygon', attributes);
  };

  self.polyline = function(attributes) {
    return add('polyline', attributes);
  };

  self.rect = function(attributes) {
    return add('rect', attributes);
  };

  self.text = function(attributes, text) {
    return add('text', attributes, text);
  };

  self.group = function(attributes) {
    const element = createNode('g', attributes);
    element.parent = current;

    element.parent.appendChild(element);

    return element;
  };

  return self;
}

export default SVG;
