const rawOrders = [
  { executed_at: "2021-06-22T15:54:41.654-03:00" },
  { executed_at: "2021-06-22T15:54:41.654-03:00" },
  { executed_at: "2023-05-22T15:54:41.654-03:00" },
  { executed_at: "2023-06-22T15:54:41.654-03:00" },
  { executed_at: "2023-06-22T15:54:41.654-03:00" },
  { executed_at: "2024-06-22T15:54:41.654-03:00" },
  { executed_at: "2024-02-22T15:54:41.654-03:00" },
  { executed_at: "2024-07-22T15:54:41.654-03:00" },
  { executed_at: "2021-01-22T15:54:41.654-03:00" },
  { executed_at: "2025-06-22T15:54:41.654-03:00" },
  { executed_at: "2025-06-22T15:54:41.654-03:00" },
  { executed_at: "2025-06-22T15:54:41.654-03:00" },
];

const orders = rawOrders.reduce((acc, order) => {
  const month = new Date(order.executed_at).getMonth();
  const year = new Date(order.executed_at).getFullYear();
  const key = `${month}-${year}`;

  if (acc[key]) {
    acc[key].push(order);
  } else {
    acc[key] = [order];
  }
  return acc;
}, {});

orders.map((order) => {
  <div>order.rawOrders</div>;
});
