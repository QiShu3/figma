import React from 'react';

/**
 * Empty 组件 - 空状态展示
 * @returns {JSX.Element} Empty 组件
 */
const Empty: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-gray-500">
      <div className="text-6xl mb-4">📭</div>
      <h3 className="text-lg font-medium mb-2">暂无数据</h3>
      <p className="text-sm">这里还没有任何内容</p>
    </div>
  );
};

export default Empty;