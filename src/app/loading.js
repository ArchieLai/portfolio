import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './page.module.css';

export default function Loading() {
  return (
    <div className={styles.load}>
      <Box>
        <CircularProgress />
      </Box>
    </div>
  );
}
