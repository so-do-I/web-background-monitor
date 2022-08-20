import { Tabs } from 'antd';
import MyDescriptions from '../MyDescriptions/MyDescriptions';
import styles from '../ChartCommenStyle.less';


const { TabPane } = Tabs;

function MyTabs(props: any) {

    const { errorDetails } = props;
    return (
        <Tabs
            defaultActiveKey="1"
            tabPosition='left'
            className={styles.myList}
        >
            {
                Object.entries(errorDetails).map((serics, index) => {
                    // console.log('serics', serics);
                    const [errorType, data] = serics;
                    return <TabPane tab={errorType} key={index} >
                        <MyDescriptions descData={data} />
                    </TabPane>
                })
            }
        </Tabs>
    );
};

export default MyTabs;