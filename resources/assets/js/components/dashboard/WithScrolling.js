import React from 'react';
import _ from "lodash";

export function withScroll(ComponentList) {
    class ListWithScroll extends React.Component {
        constructor() {
            super();

            this.state = {};
            this.state.isAllLoaded = false;

            this.onScroll = this.onScroll.bind(this);
            this.onLoad = this.onLoad.bind(this);
        }

        componentDidMount() {
            window.addEventListener('scroll', this.onScroll, false);
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.onScroll, false);
        }

        shouldComponentUpdate() {
            //If isAllLoaded == true : don't try and load more data.
            return !this.state.isAllLoaded;
        }

        onLoad() {
            const {isAllLoaded, loadNext} = this.props;


            if (isAllLoaded !== undefined && !isAllLoaded) {
                loadNext();
            }
        }

        onScroll() {
            let offsetHeight = document.querySelector('#with-scroll-wrapper').offsetHeight;

            if (window.innerHeight + window.scrollY >= offsetHeight) {
                this.onLoad();
            }
        }

        render() {
            let arrayList = [];

            const {posts: {list}, pagination} = this.props;

            if (pagination !== undefined
                && list !== undefined
                && pagination) {

                arrayList = list;
            }

            return (
                <div className={"with-scroll-wrapper"} id={"with-scroll-wrapper"}>
                    <ComponentList posts={arrayList}/>
                </div>
            );
        }
    }

    return ListWithScroll;
}
