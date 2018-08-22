import React from 'react';

export const PaneGroup = ({ children }) => (
  <div className="pane-group">{children}</div>
);

export const Pane = ({ children }) => <div className="pane">{children}</div>;

export const Sidebar = ({ children }) => (
  <div className="pane-sm sidebar">{children}</div>
);

export const MiniSidebar = ({ children }) => (
  <div className="pane-mini sidebar">{children}</div>
);
