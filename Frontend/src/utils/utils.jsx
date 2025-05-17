export function getVariation(current, previous) {
    if (previous === 0) return { value: 100, sign: '+', color: 'text-green-600' };
    const variation = ((current - previous) / previous) * 100;
    const rounded = Math.abs(variation.toFixed(1));
    return {
      value: rounded,
      sign: variation >= 0 ? '+' : '-',
      color: variation >= 0 ? 'text-green-600' : 'text-red-600',
    };
  }
  