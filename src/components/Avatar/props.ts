export const parameters = {
  docs: {
    description: {
      component: "An avatar is a visual representation of a user or entity.",
    },
  },
};

export const props = {
  onClick: {
    description:
      "Callback function that is triggered when the avatar is clicked",
  },
  unreadNotificationsAmount: {
    description: "Number of unread notifications related to the user",
  },
};
