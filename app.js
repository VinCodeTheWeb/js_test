const users = [
  {
    loginName: 'Hass',
    reportTo: 'Cha'
  },
  {
    loginName: 'Cha',
    reportTo: 'Edd'
  },
  {
    loginName: 'Vinc',
    reportTo: 'Hass'
  },
  {
    loginName: 'Edd',
    reportTo: 'Ma'
  },
  {
    loginName: 'Co',
    reportTo: 'Geo'
  },
  {
    loginName: 'Tia',
    reportTo: 'Adr'
  },
  {
    loginName: 'Mario',
    reportTo: 'Teresa'
  },
];

const getAllManagers = (users, creator) => {
  const list = [];
  let manager = creator

  const managers = users.filter((user) => {
    if (user.loginName === manager) {
      list.push(user.reportTo);
      manager = user.reportTo;
      users.filter((user) => {
        if (user.loginName === manager) {
          list.push(user.reportTo);
          manager = user.reportTo;
        }
      });
    }
  });
  return console.log(list);
};

const getAllReportTo = (users, reportTo) => {
  const list = [];
  let reporter = reportTo;

  const reporters = users.filter((user) => {
    if (user.reportTo === reporter) {
      list.push(user.loginName);
      reporter = user.loginName;
      users.filter((user) => {
        if (user.reportTo === reporter) {
          list.push(user.loginName);
          reporter = user.loginName;
        }
      });
    }
  });

  return console.log(list.length);
}

getAllManagers(users, 'Vinc');
getAllReportTo(users, 'Cha');
