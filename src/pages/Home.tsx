/**
 * 主页面 - 展示 Add Interactions 组件
 */
import AddInteractions from '../components/AddInteractions/AddInteractions';

export default function Home() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      overflow: 'auto',
      backgroundColor: '#f5f5f5'
    }}>
      <AddInteractions />
    </div>
  );
}