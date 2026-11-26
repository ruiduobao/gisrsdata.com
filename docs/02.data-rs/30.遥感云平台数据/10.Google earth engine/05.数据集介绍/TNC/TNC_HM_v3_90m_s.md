---
title: "TNC 全球人类改造 v3（静态快照 90 米）"
date: 2026-11-03 12:00:00
permalink: /pages/b32eca78/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "fragmentation"
  - "human-modification"
  - "landcover"
  - "landscape-gradient"
  - "population"
  - "stressors"
  - "tnc"
---

# TNC 全球人类改造 v3（静态快照 90 米）

英文原名：TNC Global Human Modification v3 (Static Snapshot 90m)

## 这是什么数据

全球人类改造 v3 数据集测量全球陆地生态系统（不含南极洲）累积的人类压力。它跟踪 1990 至 2022 年的数据，旨在帮助为保护规划、政策制定与研究量化人类影响。

这是 2022 年静态快照（「s」系列），分辨率 90 米。由于它使用更新的卫星与土地覆盖输入，不建议与 1990–2020 年「c」系列做直接定量比较。

每像元的改造分数按公式计算：改造 = 足迹比例乘以压力源强度。数据值以 32 位浮点存储，范围 0.0 到 1.0，其中 0.0 表示无可探测的人类改造，1.0 表示建模的最大改造。

本数据集提供八个与 IUCN 对齐的威胁类别，外加一个综合指数。它使用全球土地利用涌现数据集（GLUED）的空间平衡样本做了严格验证。在 90 米下均方根误差（RMSE）为 0.178。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地（不含南极洲）；时间：2022 年；分辨率：90 米。
- 时间范围：2022-01-01 至 2022-12-31

## 分辨率与规格

- 空间分辨率：约 90 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| All_threats_combined | 所有威胁合并（总体改造） | 90 |  |
| Agriculture | 农业（农田、林业） | 90 |  |
| Built_up | 建成区（居住、商业、休闲区域） | 90 |  |
| Energy_production_and_mining | 能源生产与采矿 | 90 |  |
| Biological_resource_use | 生物资源利用 | 90 |  |
| Human_accessibility | 人类可达性（道路、小径、基础设施） | 90 |  |
| Natural_system_modification | 自然系统改造（例如大坝、水调节） | 90 |  |
| Pollution | 污染 | 90 |  |
| Transportation_and_service_corridors | 交通与服务走廊 | 90 |  |

## 能拿来做什么

- 量化人类对陆地生态系统的压力，支撑保护规划。
- 分析 1990 年以来人类改造的变化趋势。
- 为政策制定与生态研究提供改造指数。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('TNC/HM/v3/90m_s');
```

- 数据集编号（Earth Engine ID）：`TNC/HM/v3/90m_s`
- 提供方：The Nature Conservancy、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TNC_HM_v3_90m_s

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：fragmentation, human-modification, landcover, landscape-gradient, population, stressors, tnc
- 数据引用：Theobald, D.M., Oakleaf, J.R., Moncrieff, G., Voigt, M., Kiesecker, J. & Kennedy, C.M. (2025).
Global extent and change in human modification of terrestrial ecosystems from 1990 to 2022.
Scientific Data 12, 489.
[doi:10.1038/s41597-025-04892-2](https://doi.org/10.1038/s41597-025-04892-2)

- DOI：10.1038/s41597-025-04892-2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [TNC Global Human Modification v3 (Change-Consistent 300m)](/pages/17c59e77/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [Dynamic World V1（动态世界）](/pages/a78539ca/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
