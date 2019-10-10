import React from 'react';
import { connect } from 'react-redux';
import Topbar from '../../components/top-bar';
import Slider from '../../components/slider';
import Recommend from '../../components/recommend';
import Bottombar from '../../components/bottom-bar';
import { recommend } from '../../actions/recommend';
import './index.less';

class Index extends React.Component {

  page = 1;
  perPage = 10;
  isFetching = false;
  isEnd = false;
  distance = 300;

  constructor() {
    super(...arguments);
  }

  componentWillMount() {
    this.fetchRecommend();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this), false);
  }

  onScroll() {
    const scrollTop = window.screenTop || window.pageYOffset;
    const offsetHeight = window.offsetHeight || window.innerHeight;
    const scrollHeight = window.scrollHeight || document.body.scrollHeight;
    if (!(scrollTop + offsetHeight >= scrollHeight - this.distance) || this.isFetching || this.isEnd) {
      return false;
    }
    
    this.isFetching = true;
    this.fetchRecommend();
  }

  fetchRecommend() {
    const { fetchRecommend } = this.props;

    fetchRecommend(this.page, this.perPage)
    .then((res) => {
      this.page ++;
      this.isFetching = false;
      if (res.data && res.data.data.length === 0) {
        this.isEnd = true;
      }
    })
    .catch(() => {
      this.isFetching = false;
    });
  }

  render() {
    const { recommend } = this.props;
    return (
      <div className="container">
        <Topbar />
        <Slider />
        <Recommend
          { ...recommend }
        />
        <Bottombar />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchRecommend: (username, password) => {
    return dispatch(recommend(username, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);