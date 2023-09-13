export const useConvertNumberToHours = (totalMinuts: any) => {
  const hours = Math.floor(totalMinuts / 60);
  const minutes = totalMinuts % 60;
  return `${hours}h${minutes > 0 ? `${minutes}m` : ''}`
} 