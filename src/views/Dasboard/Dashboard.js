import { useState, useEffect } from 'react';
import axios from 'axios';
import UsersList from 'components/organisms/UsersList/UsersList';
import { useParams } from 'react-router';

import { Link } from 'react-router-dom';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper, TitleWrapper, GroupWrapper } from './Dashboard.styles';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/groups`)
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Group {id || groups[0]}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper dashboard>
        <UsersList users={students} />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
