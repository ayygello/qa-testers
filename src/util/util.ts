export const shortName = (
  surname: string,
  name: string,
  patronymic: string
) => {
  return surname + ` ${name[0]}.` + `${patronymic[0]}.`;
};

export const style: any = (status: string) => {
  return (
    (status === 'new' && 'status status-content new') ||
    (status === 'completed' && 'status status-content completed') ||
    (status === 'started' && 'status status-content started') ||
    (status === 'assigned_to' && 'status status-content assigned') ||
    (status === 'declined' && 'status status-content declined')
  );
};
