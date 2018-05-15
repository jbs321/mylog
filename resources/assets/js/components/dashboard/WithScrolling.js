import React from 'react';

export function withScroll(Component) {
    class WithScroll extends React.Component {
        constructor() {
            super();
            this.onScroll = this.onScroll.bind(this);
        }

        componentDidMount() {
            window.addEventListener('scroll', this.onScroll, false);
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.onScroll, false);
        }

        onScroll() {
            console.log(Component);
            // const {list, handleScroll} = this.props;
            //
            // if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && posts.length) {
            //     handleScroll();
            // }
        }

        render() {
            return <Component {...this.props} />;
        }
    }

    return WithScroll;
}
