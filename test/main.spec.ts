import { OuraApiV2Client, ApiClientInterface, RequestProps, DailyActivityResponse, PersonalInfoResponse, HeartRateResponse, SessionResponse, WorkoutResponse, TagResponse, HeartRateRequestProps, SleepResponse_V1, ReadinessResponse_V1 } from "@api";
import Response from "../src/types/Response";

describe("main", () => {
    let testee: OuraApiV2Client;
    let apiClientMock : ApiClientInterface; // jest.Mock<ApiClientInterface>;
    beforeEach(() => {
        apiClientMock = {
            fetch: jest.fn()
        };
        //apiClientMock = <jest.Mock<ApiClientInterface>> ApiClientInterface;
        testee = new OuraApiV2Client('', apiClientMock);
    });

    it("readiness_v1", async () => {
        const props: RequestProps = {
            startDate: '2023-01-01',
            endDate: '2023-01-31',
            nextToken: 'fake'
        }
        const expected: ReadinessResponse_V1 = {
            readiness: []
        };
        (apiClientMock.fetch as jest.Mock).mockReturnValueOnce(new Response<ReadinessResponse_V1>(200, expected));
        const actual = await testee.readiness_v1(props);
        expect(apiClientMock.fetch).toHaveBeenCalledTimes(1);
        expect(actual).toBe(expected);
    });

    it("sleep_v1", async () => {
        const props: RequestProps = {
            startDate: '2023-01-01',
            endDate: '2023-01-31',
            nextToken: 'fake'
        }
        const expected: SleepResponse_V1 = {
            sleep: []
        };
        (apiClientMock.fetch as jest.Mock).mockReturnValueOnce(new Response<SleepResponse_V1>(200, expected));
        const actual = await testee.sleep_v1(props);
        expect(apiClientMock.fetch).toHaveBeenCalledTimes(1);
        expect(actual).toBe(expected);
    });

    it("tags", async () => {
        const props: RequestProps = {
            startDate: '2023-01-01',
            endDate: '2023-01-31',
            nextToken: 'fake'
        }
        const expected: TagResponse = {
            data: [],
            next_token: 'something'
        };
        (apiClientMock.fetch as jest.Mock).mockReturnValueOnce(new Response<TagResponse>(200, expected));
        const actual = await testee.tags(props);
        expect(apiClientMock.fetch).toHaveBeenCalledTimes(1);
        expect(actual).toBe(expected);
    });


    it("workouts", async () => {
        const props: RequestProps = {
            startDate: '2023-01-01',
            endDate: '2023-01-31',
            nextToken: 'fake'
        }
        const expected: WorkoutResponse = {
            data: [],
            next_token: 'something'
        };
        (apiClientMock.fetch as jest.Mock).mockReturnValueOnce(new Response<WorkoutResponse>(200, expected));
        const actual = await testee.workouts(props);
        expect(apiClientMock.fetch).toHaveBeenCalledTimes(1);
        expect(actual).toBe(expected);
    });

    it("sessions", async () => {
        const props: RequestProps = {
            startDate: '2023-01-01',
            endDate: '2023-01-31',
            nextToken: 'fake'
        }
        const expected: SessionResponse = {
            data: [],
            next_token: 'something'
        };
        (apiClientMock.fetch as jest.Mock).mockReturnValueOnce(new Response<SessionResponse>(200, expected));
        const actual = await testee.sessions(props);
        expect(apiClientMock.fetch).toHaveBeenCalledTimes(1);
        expect(actual).toBe(expected);
    });

    it("heartRate", async () => {
        const props: HeartRateRequestProps = {
            startDate_timestamp: '2023-01-01',
            endDate_timestamp: '2023-01-31',
            nextToken: 'fake'
        }
        const expected: HeartRateResponse = {
            data: [],
            next_token: 'something'
        };
        (apiClientMock.fetch as jest.Mock).mockReturnValueOnce(new Response<HeartRateResponse>(200, expected));
        const actual = await testee.heartRate(props);
        expect(apiClientMock.fetch).toHaveBeenCalledTimes(1);
        expect(actual).toBe(expected);
    });

    it("personalInfo", async () => {
        const expected: PersonalInfoResponse = {
            age: 130,
            weight: 200,
            height: 72,
            biological_sex: 'female',
            email: 'hello@world.com'
        };
        (apiClientMock.fetch as jest.Mock).mockReturnValueOnce(new Response<PersonalInfoResponse>(200, expected));
        const actual = await testee.personalInfo();
        expect(apiClientMock.fetch).toHaveBeenCalledTimes(1);
        expect(actual).toBe(expected);
    });


    it("dailyActivity", async () => {
        const props: RequestProps = {
            startDate: '2023-01-01',
            endDate: '2023-01-31',
            nextToken: 'fake'
        }
        const expected: DailyActivityResponse = {
            "data":[
                {
                    "id":"4a677591-8918-4ba8-8cf6-467b735b7495",
                    "class_5_min":"111111111111111111121111111111111111111211111111122121331111111111121222222232332222345555555432222234322222222222222232222223332223333333332222233322222222222222322222222233000033344542223434323323322222222222222222222222233332222232332222222222211233222211123111111111111111111111111111",
                    "score":93,
                    "active_calories":739,
                    "average_met_minutes":1.59375,
                    "contributors":{
                        "meet_daily_targets":100,
                        "move_every_hour":78,
                        "recovery_time":100,
                        "stay_active":69,
                        "training_frequency":100,
                        "training_volume":100
                    },
                    "equivalent_walking_distance":11880,
                    "high_activity_met_minutes":249,
                    "high_activity_time":2040,
                    "inactivity_alerts":2,
                    "low_activity_met_minutes":160,
                    "low_activity_time":14940,
                    "medium_activity_met_minutes":135,
                    "medium_activity_time":2640,
                    "met":{
                        "interval":60,"items":[
                            0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.3,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.2,0.9,0.9,0.9,1.2,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.1,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.2,0.9,0.9,0.9,0.9,1.2,0.9,0.9,0.9,0.9,1.4,0.9,0.9,0.9,0.9,0.9,0.9,1,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.3,0.9,1.3,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.2,0.9,1,0.9,1.1,1.2,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.1,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.2,0.9,1,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.2,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.1,1.4,1.2,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.3,0.9,1.2,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.1,0.9,0.9,0.9,1.2,0.9,0.9,0.9,1.3,1.3,0.9,1.3,0.9,1.1,1,0.9,0.9,0.9,0.9,1.3,0.9,1.1,1.1,1.1,1.1,0.9,0.9,0.9,1.2,0.9,0.9,2.4,1.6,1.3,4.1,1.3,1.2,1.2,1.2,1.2,1.2,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.2,0.9,0.9,0.9,0.9,0.9,0.9,1,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.1,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1,1,0.9,0.9,0.9,0.9,0.9,1.3,1.2,1,0.9,0.9,1.1,0.9,0.9,0.9,1,4.8,1.1,1.3,1.3,1.3,1.2,1.2,1.2,1.2,1.2,1.3,1.2,1.2,1.2,1.2,1.3,1.2,1.2,1.1,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.6,1.6,1.2,1.7,2.1,2.1,1.6,3.3,2.4,1.3,1.2,1.2,1.2,2.4,2,1.9,2.1,1.7,1.9,1.9,2.3,1.8,2.3,2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.1,1.2,1.2,1.2,1.2,1.1,1.3,1.2,1,0.9,0.9,1.1,2.2,3.3,2.8,2.4,1.7,3,6.2,11.2,2.8,7.2,1.9,4.6,14.4,16.4,5,4.6,10.1,16.2,5.1,3.1,5.3,16.6,10.1,3.3,3.8,15.4,11.5,4.7,3.2,4,10.5,15.2,3.5,5,6.2,16.2,9.2,2.4,11.1,3.9,9.9,12.3,3.2,5.4,10.6,4.2,5.4,1.9,2.9,2,2.6,3.2,1.2,1.2,1.4,1.1,1.3,1.3,1.5,2.1,1.3,1.3,1.2,1.2,1.3,1.3,1.2,1.2,1.2,1.2,1.3,1.2,1.6,1.5,1.7,1.3,1.3,1.3,1.2,1.3,1.4,3.3,3.2,2.3,5.4,5.8,4.8,1.7,3.1,2.2,3.7,1.2,2,1.6,1.3,1.3,1.3,2.1,1.1,1.3,1.1,1.2,1.2,1.3,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.3,1.3,1.4,1.2,1.4,2.8,1.3,1.2,1.3,1.3,1.6,1.5,1.4,1.2,1.5,1.2,1.2,1.2,1.3,3.6,1.4,1.2,1.2,1.3,1.2,1.2,1.2,1.2,1.2,1.3,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.3,1.5,1.3,1.3,1.3,1.2,1.2,1.2,1.3,1.2,1.2,1.2,1.3,1.2,1.2,1.3,1.3,1.2,1.7,2.2,1.7,2.3,1.7,1.6,2.5,1.7,1.7,1.2,1.6,1.2,1.3,1.2,1.3,1.3,1.2,1.3,1.4,1.2,1.2,1.2,1.3,1.3,1.5,1.2,1.7,1.4,1.5,1.3,1.7,1.2,2.1,1.2,1.3,1.2,1.3,1.4,1.2,2,2,1.8,2.3,1.8,1.6,2,1.4,1.6,1.5,1.8,2,1.6,1.7,1.7,1.7,1.3,1.2,1.2,1.3,1.2,1.3,1.1,1.2,1.2,1.6,1.6,2.6,2.1,2,1.4,1.6,1.7,2,1.9,1.7,2.3,1.3,1.3,2,2.9,2.9,2.1,2.8,2.4,1.8,1.9,1.6,1.5,3.2,3.2,1.6,3.2,2.4,2.3,1.9,1.4,1.9,1.9,2.5,3.2,2,1.9,1.8,1.8,1.8,2.1,2.8,3.2,1.9,2.4,2.5,1.2,1.2,1.2,1.1,1.3,0.9,1,0.9,1,1.3,1,1,1.3,1.2,1.2,1.3,1.4,1.2,1.3,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.3,1.4,2.3,2.7,1.4,2.6,1.6,2.3,1.5,1.8,2.5,1.2,1.2,1.2,1.3,1.2,1.2,1.2,1.3,1.5,1.2,1.2,1.2,1.2,1.2,1.2,1.3,1.3,1.2,1.2,1.2,1.6,1.2,1.2,1.2,1.3,1.2,1.4,1.3,1.3,1.4,1.3,1.2,1.3,1.3,1.3,1.3,1.2,1.3,1.3,1.3,1.2,1.2,1.4,1.3,1.3,1.2,1.3,1.2,1.2,1.2,1.2,1.4,1.5,1.3,1.4,1.2,1.3,1.2,1.2,1.3,1.3,1.2,1.3,1.4,1.3,1.2,1.2,1.4,1.4,1.3,1.3,1.2,1.2,2,2.4,1.7,2.5,2.3,1.3,1.4,1.7,2,1.4,1.5,1.7,1.4,1.6,1.8,1.6,1.2,1.3,1.3,1.3,1.8,1.4,1.2,1.3,1.4,1.4,1.3,1.3,1.1,1.2,1.2,1.3,1.2,1.2,1.3,1.2,1.3,1.3,1.2,1.3,1.2,1.4,1.3,1.2,1.3,1.3,1.3,1.6,1.8,1.7,1.8,2.2,1.4,1.4,1.3,2.4,1.9,0.9,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,2.3,2.3,2.1,2.3,2.8,1.9,1.4,2.8,2.9,1.7,3,2.6,2.8,2.3,5.1,5,5,1.5,3.7,4.3,3.7,5,4.7,6.9,2.3,10.3,7,9.8,5.8,3.9,5.4,5.7,5.7,5.8,4.6,1.2,1.4,1.6,1.6,1.7,2.8,1.6,1.3,1.5,1.5,1.4,1.3,1.3,1.3,1.6,1.4,1.3,3.3,4.4,1.9,1.3,5.3,3.2,1.8,5,3.9,5.1,3.3,1.2,1.8,2.6,5,5.4,2.7,1.2,1.3,2.3,2.3,1.3,1.4,1.2,1.2,1.4,1.2,1.4,1.5,1.8,3.2,1.5,1.4,1.9,2.5,1.8,1.4,2.1,1.3,1.4,1.5,1.4,1.4,2.9,1.9,3,3.5,1.9,1.9,3,2.2,1.4,1.5,2.6,1.3,1.3,1.2,1.3,1.4,1.2,1.5,1.3,1.3,1.7,1.5,1.4,1.4,1.5,1.5,1.8,1.3,1.3,1.3,1.3,1.5,1.2,1.4,1.4,1.4,1.2,1.2,1.3,1.3,1.4,1.6,1.5,1.3,1.4,1.4,1.8,1.6,1.3,1.2,1.7,1.3,1.3,1.4,1.2,1.2,1.3,1.2,1.2,1.2,1.2,1.1,1.2,1.2,1.3,1.4,1.2,1.2,1.3,1.3,1.2,1.2,1.2,1.2,1.3,1.2,1.2,1.2,1.2,1.2,1.2,1.3,1.3,1.3,1.4,1.6,1.4,1.5,1.6,1.8,1.7,1.4,1.3,1.3,1.3,1.3,1.5,1.3,1.3,1.5,1.5,1.4,1.3,1.3,1.2,1.3,1.2,1.3,1.2,1.3,1.2,1.2,1.2,1.4,1.2,1.3,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.3,1.3,1.2,1.2,1.3,2,2.9,2.9,1.7,1.6,1.8,1.9,1.5,2.3,2.7,3,3.3,2.2,4,2.4,3.3,2.1,2.4,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.3,1.4,1.2,1.2,1.2,1.6,1.5,1.2,1.4,2.1,1.6,1.7,1.5,2.5,1.4,1.2,1.2,1.2,1.4,1.3,2,2.5,3,3,1.7,1.5,1.7,1.2,1.8,2.9,1.6,1.2,1.3,1.7,1.6,1.9,3.4,2.4,1.4,1.3,1.3,1.4,1.2,1.3,1.4,1.3,1.3,1.3,1.3,1.4,1.2,1.2,1.3,1.3,1.3,1.3,1.8,1.3,1.2,2.1,1.4,1.3,1.3,1.2,1.2,1.3,1.2,1.2,1.4,1.3,1.3,1.3,1.3,1.2,1.2,1.2,1.3,1.3,1.4,1.4,2,1.2,1.2,1.2,1.2,1.2,1.4,1.2,1.2,1.2,1.2,1.3,1.2,1.2,1.2,0.9,0.9,0.9,1,1,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,3.7,4,2.2,1.7,1.7,1.9,1.6,2.3,1.3,1.2,1.6,2.3,1.3,1.2,1.2,1.3,1.9,1.3,1.2,1.3,1.2,1.1,1.2,1.2,1.2,1.2,1.2,0.9,1,0.9,1.1,1.1,1,0.9,0.9,1.1,1,0.9,0.9,1,0.9,1.1,0.9,0.9,1.2,1.2,1,1.2,1.1,1.5,1.9,1.2,1.8,1.4,0.9,1,0.9,0.9,0.9,0.9,1,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.2,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9
                        ],
                        "timestamp":"2023-09-29T04:00:00.000-04:00"
                    },
                    "meters_to_target":-5000,
                    "non_wear_time":1320,
                    "resting_time":30720,
                    "sedentary_met_minutes":6,
                    "sedentary_time":34740,
                    "steps":12671,
                    "target_calories":450,
                    "target_meters":9000,
                    "total_calories":3038,
                    "day":"2023-09-29",
                    "timestamp":"2023-09-29T04:00:00-04:00"
                }
            ]
        };
        (apiClientMock.fetch as jest.Mock).mockReturnValueOnce(new Response<DailyActivityResponse>(200, expected));
        const actual = await testee.dailyActivity(props);
        expect(apiClientMock.fetch).toHaveBeenCalledTimes(1);
        expect(actual).toBe(expected);
    });

});