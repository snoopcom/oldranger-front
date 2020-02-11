import React from 'react';
import { Col, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { formatDistanceToNow, parseISO } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { StyledTopicUserInfo, UserInfoLeft } from './styled';
import userProps from './propTypes/userProps';

const TopicUserInfo = ({ user }) => {
  return (
    <StyledTopicUserInfo type="flex" justify="space-between" align="middle">
      <UserInfoLeft>
        <h3>
          <Link to={`/profile/${user.nickName}`}>{user.nickName}</Link>
        </h3>
        <p>{`${user.firstName} ${user.lastName}`}</p>
      </UserInfoLeft>
      <Col>
        <p>
          <Icon type="user" /> {user.role.role}
        </p>
        <p>
          <Icon type="message" /> {user.messageCount}
        </p>
        <p>
          <Icon type="clock-circle" />{' '}
          {user.regDate
            ? `С нами ${formatDistanceToNow(parseISO(user.regDate), { locale: ru })}`
            : 'Неизвестно'}
        </p>
      </Col>
    </StyledTopicUserInfo>
  );
};

TopicUserInfo.propTypes = {
  user: userProps.isRequired,
};

export default TopicUserInfo;
