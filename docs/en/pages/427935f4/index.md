---
title: "GPM: Global Precipitation Measurement (GPM) Release 06 [deprecated]"
date: 2026-11-03 12:00:00
---

# GPM: Global Precipitation Measurement (GPM) Release 06 [deprecated]

Original name: GPM: Global Precipitation Measurement (GPM) Release 06 [deprecated]

## What this dataset is

Global Precipitation Measurement (GPM) is an international
satellite mission to provide next-generation observations of
rain and snow worldwide every three hours. The Integrated Multi-satellitE
Retrievals for GPM (IMERG) is the unified algorithm that provides
rainfall estimates combining data from all passive-microwave
instruments in the GPM Constellation.

This algorithm is intended to intercalibrate, merge, and interpolate
all satellite microwave precipitation estimates, together with
microwave-calibrated infrared (IR) satellite estimates, precipitation
gauge analyses, and potentially other precipitation estimators at fine
time and space scales for the TRMM and GPM eras over the entire globe.
The system is run several times for each observation time, first
giving a quick estimate and successively providing better estimates
as more data arrive. The final step uses monthly gauge data to
create research-level products. See [IMERG Technical Documentation](https://pmm.nasa.gov/sites/default/files/document_files/IMERG_doc.pdf)
for more details on the algorithm.

This collection contains provisional
products that are regularly replaced with updated versions when
the data become available. The products are marked with a metadata
property called 'status'. When a product is initially made available,
the property value is 'provisional'. Once a provisional product
has been updated with the final version, this value is updated
to 'permanent'.

This collection contains data from:

* GPM_3IMERGHH_V06 [doi:10.5067/GPM/IMERG/3B-HH-L/06](https://doi.org/10.5067/GPM/IMERG/3B-HH-L/06)
* GPM_3IMERGHH_06 [doi:10.5067/GPM/IMERG/3B-HH/06](https://doi.org/10.5067/GPM/IMERG/3B-HH/06)

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2024; resolution: 11,132 m.
- Time range: 2000-06-01 至 2024-06-02

## Resolution and specifications

- Spatial resolution: about 11,132 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| HQobservationTime | PMW source time | 11132 |  |
| HQprecipSource | PMW source sensor identifier | 11132 |  |
| HQprecipitation | merged PMW precipitation | 11132 |  |
| IRkalmanFilterWeight | Kalman filter weight for IR | 11132 |  |
| IRprecipitation | IR precipitation | 11132 |  |
| precipitationCal | snapshot precipitation - calibrated | 11132 |  |
| precipitationUncal | snapshot precipitation - uncalibrated | 11132 |  |
| probabilityLiquidPrecipitation | probability of liquid precipitation phase | 11132 |  |
| randomError | calibrated-precipitation random error | 11132 |  |

## What you can use it for

- Precipitation monitoring and hydrological modeling
- Climate research
- Flood and drought assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/GPM_L3/IMERG_V06');
```

- Earth Engine ID: `NASA/GPM_L3/IMERG_V06`
- Providers: NASA GES DISC at NASA Goddard Space Flight Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_GPM_L3_IMERG_V06
* [Algorithm Theoretical Basis Document](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/IMERG_ATBD_V06.pdf)
* [IMERG Quality Index](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/IMERGV06_QI.pdf)
* [Caveats for IMERG extension into TRMM era](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/IMERGV06_TRMMera-caveats.pdf)
* [IMERG Technical Documentation](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/IMERG_doc.06.pdf)
* [Release notes; New Morphing algorithm](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/MorphingInV06IMERG.pdf)
* [Remote-Sensing Reflectance](https://gpm1.gesdisc.eosdis.nasa.gov/data/doc/README.GPM.pdf)
* [Anomalies](https://gpmweb2https.pps.eosdis.nasa.gov/tsdis/AB/docs/gpm_anomalous.html)

## License and citation

- License: proprietary
- Keywords: climate, geophysical, gpm, half-hourly, imerg, jaxa, nasa, precipitation, weather
- 数据引用：Huffman, G.J., E.F. Stocker, D.T. Bolvin, E.J. Nelkin, Jackson Tan (2019),
GPM IMERG Final Precipitation L3 Half Hourly 0.1 degree x 0.1 degree V06,
Greenbelt, MD, Goddard Earth Sciences Data and Information Services Center
(GES DISC), Accessed: [Data Access Date],
[doi:10.5067/GPM/IMERG/3B-HH/06](https://doi.org/10.5067/GPM/IMERG/3B-HH/06)

- DOI：10.5067/GPM/IMERG/3B-HH-L/06

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GPM: Global Precipitation Measurement (GPM) Release 07](/pages/3e858db5/)
- [GPM: Monthly Global Precipitation Measurement (GPM) v6](/pages/0308328b/)
- [GPM: Monthly Global Precipitation Measurement (GPM) vRelease 07](/pages/29f02f85/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
