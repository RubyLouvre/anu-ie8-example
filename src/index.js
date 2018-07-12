import 'es5-shim'; //IE8 ^4.5.10
import 'object-create-ie8';//IE8, 我写的库，这样就不用加上es5-sham
import 'object-defineproperty-ie8';//IE8， 我写的库
import 'console-polyfill';//IE8下，如果你不打开开发者工具，window下是没有console这个对象的，
//只有打开了F12才会有这个方法
import 'json3';  //比IE8的JSON好用
import 'bluebird'; //性能超高的Promise实现
import 'fetch-polyfill2'; //fetch 实现，我的另一力作

//上面这几个可以单独打包
import  React  from 'react';
import  ReactDOM  from 'react-dom';

var container = document.getElementById('root');

class HInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.defaultValue || ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log('onChange',e.target.value);
        this.setState({
            value: e.target.value
        });

        this.props.onChange && this.props.onChange(e);
    } 

    render() {
        return (
            <div class="h-input-wrapper">
                <input value={this.state.value} onChange={this.onChange} class="h-input" />
                <p>{this.state.value}</p>
            </div>
        );
    }
}
ReactDOM.render(<div style={{height: 400}}><HInput /></div>, container );