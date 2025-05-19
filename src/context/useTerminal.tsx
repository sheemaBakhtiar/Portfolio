import { useContext } from 'react';
import { TerminalContext, TerminalContextType } from './TerminalContext';

export const useTerminal = (): TerminalContextType => {
  const context = useContext(TerminalContext);
  if (context === undefined) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
};
