import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,setCurrentPage,toggleFollowingProgress,  requestUsers} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getPageSize } from '../../redux/users-selectors';
import { getUsers } from '../../redux/users-selectors';
import { getTotalUsersCount } from '../../redux/users-selectors';
import { getCurrentPage } from '../../redux/users-selectors';
import { getIsFetching } from '../../redux/users-selectors';
import { getFollowingInProgress } from '../../redux/users-selectors';


class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage,pageSize} = this.props;
        this.props.requestUsers(this.props, this.props);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
       // users: getUsers(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
// let withRedirect = withAuthRedirect(UsersContainer)


export default compose(
    connect(mapStateToProps,{follow, unfollow,setCurrentPage,toggleFollowingProgress, requestUsers}),
    withAuthRedirect
) (UsersContainer)
