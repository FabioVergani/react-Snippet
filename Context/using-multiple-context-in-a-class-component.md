# Using multiple context in a class component

The static contextType property won't work if you need more than one,
so instead you need to use a context consumer.

when you need the value only in the render function:

```javascript
export class Example extends React.Component {
  render() {
    <LocalizationContext.Consumer>
      {(translate) => (
        <SomeOtherContext.Consumer>
          {(value) => (
            <div>{translate(value)}</div>
          )}
        </SomeOtherContext.Consumer>
      )}
    </LocalizationContext.Consumer>
  }
}

```

when you need the value in other lifecycle:

```javascript
export const Example = (props) => (
  <LocalizationContext.Consumer>
    {(translate) => (
      <SomeOtherContext.Consumer>
        {(value) => (
          <InnerComponent translate={translate} value={value} {...props} />
        )}
      </SomeOtherContext.Consumer>
    )}
  </LocalizationContext.Consumer>
)

class InnerComponent extends React.Component {
  componentDidMount() {
    // something with props.translate or props.value
  }
}
```
