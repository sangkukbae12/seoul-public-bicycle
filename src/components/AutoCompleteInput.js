import React, { useContext } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { MapContext } from '../context';

export default function AutoCompleteInput() {
  const { district, handleFlyTo } = useContext(MapContext);

  const onChangeHandler = (e, v) => {
    e.preventDefault();
    console.log(district[v?.sig_kor_nm]);
    handleFlyTo(district[v?.sig_kor_nm]);
  };

  return (
    <Autocomplete
      id="SIG-KOR-NM"
      options={locations}
      getOptionLabel={(option) => option.sig_kor_nm}
      style={{ width: 180 }}
      onChange={(event, value) => onChangeHandler(event, value)}
      renderInput={(params) => (
        <TextField {...params} label="서울시 행정구역" variant="outlined" />
      )}
    />
  );
}

const locations = [
  {
    esri_pk: 0,
    sig_eng_nm: 'Dobong-gu',
    lng: '127.0317674',
    sig_cd: '11320',
    sig_kor_nm: '도봉구',
    objectid: 1,
    lat: '37.6658609',
  },
  {
    esri_pk: 1,
    sig_eng_nm: 'Eunpyeong-gu',
    lng: '126.9227004',
    sig_cd: '11380',
    sig_kor_nm: '은평구',
    objectid: 2,
    lat: '37.6176125',
  },
  {
    esri_pk: 2,
    sig_eng_nm: 'Dongdaemun-gu',
    lng: '127.0507003',
    sig_cd: '11230',
    sig_kor_nm: '동대문구',
    objectid: 3,
    lat: '37.5838012',
  },
  {
    esri_pk: 3,
    sig_eng_nm: 'Dongjak-gu',
    lng: '126.9443073',
    sig_cd: '11590',
    sig_kor_nm: '동작구',
    objectid: 4,
    lat: '37.4965037',
  },
  {
    esri_pk: 4,
    sig_eng_nm: 'Geumcheon-gu',
    lng: '126.9001546',
    sig_cd: '11545',
    sig_kor_nm: '금천구',
    objectid: 5,
    lat: '37.4600969',
  },
  {
    esri_pk: 5,
    sig_eng_nm: 'Guro-gu',
    lng: '126.858121',
    sig_cd: '11530',
    sig_kor_nm: '구로구',
    objectid: 6,
    lat: '37.4954856',
  },
  {
    esri_pk: 6,
    sig_eng_nm: 'Jongno-gu',
    lng: '126.9861493',
    sig_cd: '11110',
    sig_kor_nm: '종로구',
    objectid: 7,
    lat: '37.5990998',
  },
  {
    esri_pk: 7,
    sig_eng_nm: 'Gangbuk-gu',
    lng: '127.0147158',
    sig_cd: '11305',
    sig_kor_nm: '강북구',
    objectid: 8,
    lat: '37.6469954',
  },
  {
    esri_pk: 8,
    sig_eng_nm: 'Jungnang-gu',
    lng: '127.0939669',
    sig_cd: '11260',
    sig_kor_nm: '중랑구',
    objectid: 9,
    lat: '37.5953795',
  },
  {
    esri_pk: 9,
    sig_eng_nm: 'Gangnam-gu',
    lng: '127.0664091',
    sig_cd: '11680',
    sig_kor_nm: '강남구',
    objectid: 10,
    lat: '37.4959854',
  },
  {
    esri_pk: 10,
    sig_eng_nm: 'Gangseo-gu',
    lng: '126.8226561',
    sig_cd: '11500',
    sig_kor_nm: '강서구',
    objectid: 11,
    lat: '37.5657617',
  },
  {
    esri_pk: 11,
    sig_eng_nm: 'Jung-gu',
    lng: '126.9941904',
    sig_cd: '11140',
    sig_kor_nm: '중구',
    objectid: 12,
    lat: '37.5579452',
  },
  {
    esri_pk: 12,
    sig_eng_nm: 'Gangdong-gu',
    lng: '127.1464824',
    sig_cd: '11740',
    sig_kor_nm: '강동구',
    objectid: 13,
    lat: '37.5492077',
  },
  {
    esri_pk: 13,
    sig_eng_nm: 'Gwangjin-gu',
    lng: '127.0857528',
    sig_cd: '11215',
    sig_kor_nm: '광진구',
    objectid: 14,
    lat: '37.5481445',
  },
  {
    esri_pk: 14,
    sig_eng_nm: 'Mapo-gu',
    lng: '126.9087803',
    sig_cd: '11440',
    sig_kor_nm: '마포구',
    objectid: 15,
    lat: '37.5622906',
  },
  {
    esri_pk: 16,
    sig_eng_nm: 'Seocho-gu',
    lng: '127.0378103',
    sig_cd: '11650',
    sig_kor_nm: '서초구',
    objectid: 16,
    lat: '37.4769528',
  },
  {
    esri_pk: 17,
    sig_eng_nm: 'Seongbuk-gu',
    lng: '127.0232185',
    sig_cd: '11290',
    sig_kor_nm: '성북구',
    objectid: 17,
    lat: '37.606991',
  },
  {
    esri_pk: 18,
    sig_eng_nm: 'Nowon-gu',
    lng: '127.0771201',
    sig_cd: '11350',
    sig_kor_nm: '노원구',
    objectid: 18,
    lat: '37.655264',
  },
  {
    esri_pk: 19,
    sig_eng_nm: 'Songpa-gu',
    lng: '127.1144822',
    sig_cd: '11710',
    sig_kor_nm: '송파구',
    objectid: 19,
    lat: '37.5048534',
  },
  {
    esri_pk: 21,
    sig_eng_nm: 'Seodaemun-gu',
    lng: '126.9356665',
    sig_cd: '11410',
    sig_kor_nm: '서대문구',
    objectid: 20,
    lat: '37.5820369',
  },
  {
    esri_pk: 22,
    sig_eng_nm: 'Yangcheon-gu',
    lng: '126.8561534',
    sig_cd: '11470',
    sig_kor_nm: '양천구',
    objectid: 21,
    lat: '37.5270616',
  },
  {
    esri_pk: 23,
    sig_eng_nm: 'Yeongdeungpo-gu',
    lng: '126.9139242',
    sig_cd: '11560',
    sig_kor_nm: '영등포구',
    objectid: 22,
    lat: '37.520641',
  },
  {
    esri_pk: 15,
    sig_eng_nm: 'Gwanak-gu',
    lng: '126.9438071',
    sig_cd: '11620',
    sig_kor_nm: '관악구',
    objectid: 23,
    lat: '37.4653993',
  },
  {
    esri_pk: 20,
    sig_eng_nm: 'Seongdong-gu',
    lng: '127.0409622',
    sig_cd: '11200',
    sig_kor_nm: '성동구',
    objectid: 24,
    lat: '37.5506753',
  },
  {
    esri_pk: 24,
    sig_eng_nm: 'Yongsan-gu',
    lng: '126.9810742',
    sig_cd: '11170',
    sig_kor_nm: '용산구',
    objectid: 25,
    lat: '37.5311008',
  },
];
