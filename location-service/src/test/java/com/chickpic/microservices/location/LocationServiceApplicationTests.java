package com.chickpic.microservices.location;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

@Import(TestcontainersConfiguration.class)
@SpringBootTest
class LocationServiceApplicationTests {

	@Test
	void contextLoads() {
	}

}
