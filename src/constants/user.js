export const ROLES = {
  OWNER: "owner",
  EDITOR: "editor",
  VIEWER: "viewer",
};

export const ROLES_JP = {
  [ROLES.OWNER]: "オーナー",
  [ROLES.EDITOR]: "編集者",
  [ROLES.VIEWER]: "閲覧者",
};

export const ROLE_LIST = [
  {
    value: ROLES.OWNER,
    label: ROLES_JP[ROLES.OWNER],
  },
  {
    value: ROLES.EDITOR,
    label: ROLES_JP[ROLES.EDITOR],
  },
  {
    value: ROLES.VIEWER,
    label: ROLES_JP[ROLES.VIEWER],
  },
];

// 自分が何roleなのか
export const getMyRole = (users, me, propertyName = 'userId') => {
  try {
    return users.find(user => user[propertyName] === me.userId).role
  } catch (err) {
    return null
  }
}